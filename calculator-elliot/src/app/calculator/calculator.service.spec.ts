/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should ...', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();

    // Service test
    service.setKeypadValue('1');
    expect(service.getDisplay() == '1').toBeTruthy();
    
    // Do unit test, 1+1=2
    service.setKeypadValue('+');
    service.setKeypadValue('1');
    service.setKeypadValue('=');
    expect(service.getDisplay() == '2').toBeTruthy();

    
  }));
});
