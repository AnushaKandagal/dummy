import { Component } from '@angular/core';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.homecomponent.html',
  styleUrls: ['./app.homecomponent.css'],
  providers:[DisplayService]
})
export class HomeComponent {
  title = 'myproj';
}
