import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  operatorInput,
  operatorNegateOperator,
  operatorNegative,
  operatorOperator,
  operatorResult,
} from "app/app.actions";
import { AppState, selectAppState } from "app/app.feature";

@Component({
  selector: "operator-key",
  templateUrl: "./operator-key.component.html",
})
export class OperatorKeyComponent implements OnInit {
  @Input() symbol!: string;

  private state!: AppState;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectAppState).subscribe((state) => {
      this.state = state;
    });
  }

  handleClick() {
    const { state, store, symbol } = this;
    switch (state.status) {
      case "input":
        return store.dispatch(operatorInput({ symbol }));
      case "operator":
        return this.symbol === "-"
          ? store.dispatch(operatorNegateOperator({ symbol }))
          : store.dispatch(operatorOperator({ symbol }));
      case "negative":
        return store.dispatch(operatorNegative({ symbol }));
      case "result":
        return store.dispatch(operatorResult({ symbol }));
    }
  }
}
