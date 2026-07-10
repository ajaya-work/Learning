import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 name : string ="";
 city : string ="";
 email : string ="";
 updateName(value: string){
  this.name = value;
 }
 getEmail(value: string){
  this.email = value;
 }
}
