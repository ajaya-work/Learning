import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 isLoggedIn = false;

 marks = 65;

 showBox = true;

 toggleBox() {
   this.showBox = !this.showBox;
  }

  age = 0;
  updatedAge (value: string) {
  this.age = Number(value);
  }
}
