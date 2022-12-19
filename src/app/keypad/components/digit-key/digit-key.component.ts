import { Component, HostListener, Input } from "@angular/core";
import { NumberReducer } from "app/state/number-reducer.service";
import { StateService } from "app/state/state.service";

@Component({
  selector: "digit-key",
  templateUrl: "./digit-key.component.html",
})
export class DigitKeyComponent {
  @Input() symbol = "";

  constructor(
    private stateService: StateService,
    private numberReducer: NumberReducer
  ) {}

  @HostListener("window:keydown", ["$event.code"])
  handleKeydown(code: string) {
    const isThisDecimal = code === "NumpadDecimal" && this.symbol === ".";
    const isThisDigit = code === "Numpad" + this.symbol;

    if (isThisDigit || isThisDecimal) this.handleClick();
  }

  handleClick() {
    this.stateService.onDigitClick(this.symbol, this.numberReducer);
  }
}
