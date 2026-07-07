import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isDisabled = false;
  usersname = 'Ajaya';
  isActive = true;
  boxwidth = 100;
  bGColor = 'red';
  username = '';
  count= signal(0);
}
