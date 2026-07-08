import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 handleClick (){
  console.log("Button clicked");
 }

 onTyping(event: any){
  console.log("Typed", event.target.value);
 }

 onKeyUp(event: any){
  console.log("Key up", event.key);
 }

 onHover(){
  console.log("Mouse over");
 }

 onLeave(){
  console.log("Mouse leave");
 }

 onBlur(){
  console.log("Input lost focus");
 }

 onFocus(){
  console.log("Input gained focus");
 }
}
