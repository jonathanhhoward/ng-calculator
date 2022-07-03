import { Component } from "@angular/core";
import { StoreService } from "shared/store/store.service";

@Component({
  selector: "display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"],
})
export class DisplayComponent {
  constructor(public store: StoreService) {}
}
