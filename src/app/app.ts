import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 items = ['HTML','CSS','JavaScript', 'Angular'];
 users =[{name: 'Ajaya', age: 24},{name: 'John', age: 30},{name: 'Alice', age: 18}]

 fruit = ['Apple','Banana','Cherry','Date'];

 removeItem(i: number){
  this.fruit.splice(i,1);
 }

 numbers = [10,20,15,30,25];
}
