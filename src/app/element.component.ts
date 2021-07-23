import { Component, Input } from "@angular/core";

@Component({
  selector: "app-element",
  templateUrl: "./element.component.html",
  styleUrls: ["./element.component.sass"]
})
export class ElementComponent {
  title = "Angular Elements";
  @Input() name: string;
  @Input() answer: string;

  constructor() {}
}
