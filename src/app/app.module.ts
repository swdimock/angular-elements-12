import { DoBootstrap, Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";
import { ElementComponent } from "./element.component";

@NgModule({
  declarations: [ElementComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ElementComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(ElementComponent, {
      injector
    });
    if (!customElements.get("app-element")) {
      customElements.define("app-element", customElement);
    }
  }

  ngDoBootstrap() {}
}
