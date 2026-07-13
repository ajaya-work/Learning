import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  value : string = "home";

  tab = "home";

  categories ="";
  updateCat (value : string){
    this.categories = value.toLowerCase();
  }
}
