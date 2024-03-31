import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2" (click)="increaseBy(+1)">+1</button>
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2" (click)="reset()">Reset</button>
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2" (click)="decreaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  counter: number = 10;

  constructor() {}

  increaseBy(value: number) {
    this.counter += value;
  }

  reset() {
    this.counter = 10;
  }

  decreaseBy(value: number) {
    this.counter -= value;
  }
}
