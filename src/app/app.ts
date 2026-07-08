import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Events } from './events/events';


@Component({
  selector: 'app-root',
  imports: [Events, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 
}
