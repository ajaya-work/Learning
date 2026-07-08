import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
//  value = 10;
//  value = "Ajaya";

// this is property declaration
// Union type
  name : string | number = "Ajaya";
  age : number = 20;
  isValid : boolean = true;

 handleClick() {
  // this is variable declaration
  let value;
  value = 20;
  value = "Ajaya";
  console.log(value);
 }

 sum (a:number, b:number) {
  console.log(a + b);
 }
}
