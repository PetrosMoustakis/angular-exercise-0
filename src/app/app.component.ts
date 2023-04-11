import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input()
  even: string[] = [];
  @Input()
  odd: string[] = [];

  onWordEntered(word: string) {
    const count = word.length;

    if (count % 2 === 0) {
      this.even.push(`${word}`);
    } else {
      this.odd.push(`${word}`);
    }
  }
}
