import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
//import { CalculatorService} from './app/calculator/calculator.service'; // import the calculator service

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule, CalculatorService);
platformBrowserDynamic().bootstrapModule(AppModule);