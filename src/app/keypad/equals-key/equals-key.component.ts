import { Component } from "@angular/core";
import { AppState } from "store/app.feature";
import { StoreFacade } from "store/store.facade";

@Component({
  selector: "equals-key",
  templateUrl: "./equals-key.component.html",
})
export class EqualsKeyComponent {
  private state!: AppState;

  constructor(private store: StoreFacade) {
    this.store.appState$.subscribe((state) => {
      this.state = state;
    });
  }

  handleClick() {
    const { state, store } = this;

    switch (state.status) {
      case "input":
        return store.onEqualsInput();
      case "operator":
        return store.onEqualsOperator();
      case "negative":
        return store.onEqualsNegative();
    }
  }
}
