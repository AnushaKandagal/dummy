import { Injectable } from '@angular/core';
//import { get } from 'http';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() {
    
   }
   displaycourses(){
     alert("in service");
     return ['java','python','C#'];
   }
}
