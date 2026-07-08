import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 count =0;
 handleClick(){
  let abc = "abcd";
  console.log("Button Clicked");
  this.helloWorld();
 }
 helloWorld(){
  console.log("Hello World");
 }
}
