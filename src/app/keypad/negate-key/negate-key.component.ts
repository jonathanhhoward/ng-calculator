import { Component } from "@angular/core";
import { StoreService } from "lib/store.service";

@Component({
  selector: "negate-key",
  templateUrl: "./negate-key.component.html",
})
export class NegateKeyComponent {
  constructor(private store: StoreService) {}

  handleClick() {
    this.store.onNegateClick();
  }
}
