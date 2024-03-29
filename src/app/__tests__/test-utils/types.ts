export interface Display {
  expression: HTMLElement;
  input: HTMLElement;
}

export interface DisplayTextContent {
  expression: string | null;
  input: string | null;
}

export interface KeyPad {
  clear: HTMLElement;
  del: HTMLElement;
  divide: HTMLElement;
  multiply: HTMLElement;
  subtract: HTMLElement;
  add: HTMLElement;
  negate: HTMLElement;
  equals: HTMLElement;
  exponent: HTMLElement;
  decimal: HTMLElement;
  zero: HTMLElement;
  one: HTMLElement;
  two: HTMLElement;
  three: HTMLElement;
  four: HTMLElement;
  five: HTMLElement;
  six: HTMLElement;
  seven: HTMLElement;
  eight: HTMLElement;
  nine: HTMLElement;
}
