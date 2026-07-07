import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 name = "Angular Tutorial";
 isAdmin = true;
 count = 5;
 price = 1;
 isLogin = true;
 title = signal("Welcome to Angular");
 getUser (){
  return "John Doe";
 }
}
