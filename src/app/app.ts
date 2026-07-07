import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signin } from './signin/signin';


@Component({
  selector: 'app-root',
  imports: [Signin],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 
}
