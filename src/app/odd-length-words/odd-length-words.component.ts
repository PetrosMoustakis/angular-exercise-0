import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-odd-length-words',
  templateUrl: './odd-length-words.component.html',
  styleUrls: ['./odd-length-words.component.css'],
})
export class OddLengthWordsComponent {
  @Input()
  odd: string[] = [];
}
