import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { generateRandomNumber } from '@nx15/my-lib';


@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'nx15-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomNumber: number | undefined ;

  generateRandomNumberito() {
    this.randomNumber = generateRandomNumber(1, 10);
  }
}
