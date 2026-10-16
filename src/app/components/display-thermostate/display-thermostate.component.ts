import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-thermostate',
  imports: [],
  templateUrl: './display-thermostate.component.html',
  styleUrl: './display-thermostate.component.css',
  host: {
    '[class.warning]': 'alarm'
  }
})
export class DisplayThermostateComponent implements OnChanges {

  //hooks = onChanges se lanza cuando hay un cambio en input
  ngOnChanges(changes: SimpleChanges): void {

    if (changes:['temperature']) {
      this.alarm = changes['temperature'].currentValue > this.umbral();
    }


    throw new Error('Method not implemented.');
  }




  temperature = input.required<number>();

}
