import { Component } from '@angular/core';
import { generateRandomNumber } from '@nx15/my-lib';


@Component({
  selector: 'nx15-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomNumber: number | undefined ;

  generateRandomNumberito() {
    this.randomNumber = generateRandomNumber(1, 1000);
  }
}
