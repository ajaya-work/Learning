import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface User {
  name : string;
  age : number
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 count = signal<number>(0);
 name = signal<string>('Angular');
 isAdmin = signal<boolean>(true);

//  Array in Signal
 numbers = signal<number[]>([1,20,30,25,50]);

//  object in signal
 user = signal<{name:string, age:number}>({
  name: 'Ajaya',
  age :  26
 })

//  signal using interface
 person = signal<User>({
  name: 'Ajaya',
  age : 26
 })

 directUpdate(){
  this.count.set(5);
  this.name.set('Ajaya');
  this.numbers.set([100,200,300]);
 }

 addNumber(){
  this.numbers.update(arr => [...arr, 400] )
 }
}
