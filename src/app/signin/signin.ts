import {Component} from '@angular/core';

@Component({
  selector: 'app-signin',
//   template: '<h2>Sign In</h2>',
//   styles:[`
//   h2 {
//         color: blue;
//     }`]
    templateUrl: './signin.html',
    styleUrl: './signin.scss'
})
export class Signin {
  title = 'Sign In Page';
}