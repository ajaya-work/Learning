import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 count : number= 0;

//  onIncrement() {
//     this.count++;
//   }

//   onDecrement() {
//     if (this.count > 0) {
//     this.count--;
//   }
// }
//   onReset() {
//     this.count = 0;
//   }

  handle(value : string) {
    if(value === 'plus') {
      this.count++;
    } else if(value === 'minus') {
      if (this.count > 0) {
        this.count--;
      }
    } else if(value === 'reset') {
      this.count = 0;
    }

  }
}
