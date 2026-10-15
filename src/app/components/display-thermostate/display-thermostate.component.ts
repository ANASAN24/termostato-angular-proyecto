import { Component, input } from '@angular/core';

@Component({
  selector: 'app-display-thermostate',
  imports: [],
  templateUrl: './display-thermostate.component.html',
  styleUrl: './display-thermostate.component.css'
})
export class DisplayThermostateComponent {

  temperature = input.required<number>();
  
}
