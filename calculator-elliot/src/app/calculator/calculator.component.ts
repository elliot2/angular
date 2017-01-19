import { Component, OnInit } from '@angular/core';
import { CalculatorService} from './calculator.service';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CalculatorService]
})
export class CalculatorComponent implements OnInit {

  displayText: string = ""; // Used  for binding to child component

  constructor(private calculatorService : CalculatorService) { 
  }

  keypadEntry(event) {
    // Obtain the button pressed from the textContent of the event
    let keypadValue = event.target.textContent; 
    this.calculatorService.setKeypadValue(keypadValue);

    // After a button is pressed, we update the display.
    this.displayText=this.calculatorService.getDisplay(); 
  }

  ngOnInit() {
  }

}
