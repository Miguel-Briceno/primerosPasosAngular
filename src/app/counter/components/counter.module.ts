import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";


@NgModule({
  declarations: [
    // components
    CounterComponent
  ],exports: [
    CounterComponent
  ]
})
export class CounterModule {}
