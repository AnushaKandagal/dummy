import { Component } from '@angular/core';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DisplayService],
})
export class AppComponent {
  title = 'myproj';
 
 
}
