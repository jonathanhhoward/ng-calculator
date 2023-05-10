import { Injectable } from "@angular/core";
import { Calculator } from "app/calculator/calculator";
import { FloatingPoint } from "app/models/floating-point";
import { Digit, Operator } from "app/models/types";
import { Reducer } from "app/state/reducer";
import { State } from "app/state/state";

@Injectable({ providedIn: "root" })
export class NumberReducer implements Reducer {
  constructor(private calculator: Calculator) {}

  deleteClick(state: State): State {
    return {
      ...state,
      input: new FloatingPoint(),
    };
  }

  digitClick(state: State, symbol: Digit): State {
    return {
      ...state,
      input: (<FloatingPoint>state.input).append(symbol),
    };
  }

  operatorClick(state: State, symbol: Operator): State {
    return {
      expression: state.expression + state.input,
      input: symbol,
    };
  }

  negateClick(state: State): State {
    const negated = this.negateMantissaOrExponent(<FloatingPoint>state.input);
    return {
      ...state,
      input: new FloatingPoint(negated),
    };
  }

  equalsClick(state: State): State {
    const expression = state.expression + state.input;
    return {
      expression: expression + "=",
      input: this.calculator.eval(expression),
    };
  }

  private negateMantissaOrExponent(float: FloatingPoint) {
    const [mantissa, exponent] = float.value.split("e");
    return exponent === undefined ? `${-float}` : `${mantissa}e${-exponent}`;
  }
}
