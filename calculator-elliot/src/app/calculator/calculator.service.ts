import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

// This service is designed like the firmware of the calculator. 

// It has two methods, one to set a keypad value.
// The other method is to get the string value to be displayed by the component.


  private equation : string; // Used to build the current equation
  private display : string; // The result of processing in this service. 



// Used internally to update the result
private computeAndClear() {
   try {
         this.display = eval(this.equation);
        }
         catch (e)
        {
         console.log(e);
       }
    this.equation = '';
}


/*
    Input String : Value to process.
*/
setKeypadValue(keypadEntry) {

    // Clear the display state when the equation is empty.
    if (this.equation=='')
     this.display='';


    if (keypadEntry == '=')
          this.computeAndClear(); 
       else
        {
          if (keypadEntry == '√')
          this.equation = 'Math.sqrt('+this.equation+')';
            else 
           if (keypadEntry == '^')
            {
                this.equation = 'Math.pow('+this.equation+',2)';
            }
            else
             { 
              this.equation += keypadEntry;  
             }

             this.display += keypadEntry;
          }
   }

/*
   Get the display output from the calculator service
   Returns: String result
*/
getDisplay() : string {
     return this.display;
    }


constructor() { 
  this.equation = '';
}

}
