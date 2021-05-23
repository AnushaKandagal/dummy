import { Component } from '@angular/core';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.detailcomponent.html',
  styleUrls: ['./app.detailcomponent.css'],
})
export class DetailComponent {
  title = 'services';
  course;
  constructor(disp:DisplayService)
  {
    this.course=disp.displaycourses();
  }
}
