import { Component, OnInit, Output, EventEmitter } from '@angular/core'; // added Output and EventEmitter for keypad entry.
import { CalculatorService} from '../calculator.service';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

constructor(private calculatorService : CalculatorService) { } // define a private field for the calculator service, injected into the constructor.

@Output() onKeypadEntry = new EventEmitter(); 

sendKeypadEntry(event) {
  this.onKeypadEntry.emit(event);
}

ngOnInit() {
  }

}
