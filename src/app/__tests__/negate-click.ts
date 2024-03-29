import {
  fireClickEvents,
  getTextContent,
} from "app/__tests__/test-utils/helpers";
import renderApp from "app/__tests__/test-utils/render-app";

test("prepends current input with '-' if positive", async () => {
  const { display, keyPad } = await renderApp();
  const { add, negate, one } = keyPad;

  fireClickEvents([one, negate]);
  expect(getTextContent(display)).toEqual({ expression: "", input: "-1" });

  fireClickEvents([add, one, negate]);
  expect(getTextContent(display)).toEqual({ expression: "-1+", input: "-1" });
});

test("removes '-' from current input if negative", async () => {
  const { display, keyPad } = await renderApp();
  const { add, negate, one } = keyPad;

  fireClickEvents([one, negate, negate]);
  expect(getTextContent(display)).toEqual({ expression: "", input: "1" });

  fireClickEvents([add, one, negate, negate]);
  expect(getTextContent(display)).toEqual({ expression: "1+", input: "1" });
});

test("does not negate zero", async () => {
  const { display, keyPad } = await renderApp();
  const { negate } = keyPad;

  fireClickEvents([negate]);
  expect(getTextContent(display)).toEqual({ expression: "", input: "0" });
});

test("ignored with operator", async () => {
  const { display, keyPad } = await renderApp();
  const { add, negate } = keyPad;

  fireClickEvents([add, negate]);
  expect(getTextContent(display)).toEqual({ expression: "0", input: "+" });
});

test("keeps expression negates result", async () => {
  const { display, keyPad } = await renderApp();
  const { negate, equals, one } = keyPad;

  fireClickEvents([one, equals, negate]);
  expect(getTextContent(display)).toEqual({ expression: "1=", input: "-1" });
});

test("negates exponent when entering exponent", async () => {
  const { display, keyPad } = await renderApp();
  const { negate, exponent, one } = keyPad;

  fireClickEvents([exponent, one, negate]);
  expect(getTextContent(display)).toEqual({ expression: "", input: "0e-1" });

  fireClickEvents([negate]);
  expect(getTextContent(display)).toEqual({ expression: "", input: "0e1" });
});

test("negates mantissa when result", async () => {
  const { display, keyPad } = await renderApp();
  const { negate, equals, exponent, zero, one } = keyPad;

  fireClickEvents([one, exponent, one, zero, equals, negate]);
  expect(getTextContent(display)).toEqual({
    expression: "1e10=",
    input: "-1e+10",
  });

  fireClickEvents([negate]);
  expect(getTextContent(display)).toEqual({
    expression: "1e10=",
    input: "1e+10",
  });
});
