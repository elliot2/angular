import { Component } from '@angular/core'; // So as I can use component decorator to create a component class derivative

// This is the decorator, like an annotation that applies component decoration.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
