import { createAction, props } from "@ngrx/store";

export interface Payload {
  symbol: string;
}

export const testAction = createAction("[app] test action", props<Payload>());

export const getResult = createAction("[app] get result");

export const clearClicked = createAction("[app] clear clicked");

export const deletClicked = createAction("[app] delete clicked");

export const digitClicked = createAction(
  "[app] digit clicked",
  props<Payload>()
);

export const operatorClicked = createAction(
  "[app] operator clicked",
  props<Payload>()
);

export const equalsInput = createAction("[app] equals input");

export const equalsOperator = createAction("[app] equals operator");

export const equalsNegative = createAction("[app] equals negative");
