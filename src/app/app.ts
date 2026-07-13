import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  status : string = "processing";
  marks : number = 72;

  age : number = 0;
  updatedAge (value : string){
    this.age = Number(value);
  } 

  section = "home"
}
