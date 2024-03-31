import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = ['Spidermas', 'Iroman', 'Hulk', 'Thor'];
  public deletedHeroe?: string;
  removeLastHeroe():void{
    this.deletedHeroe = this.heroNames.pop();

  }

}
