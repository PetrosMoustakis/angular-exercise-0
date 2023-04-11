import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  word: string = '';

  @Output()
  WordOutput: EventEmitter<string> = new EventEmitter<string>();

  onSubmit(word: string) {
    this.WordOutput.emit(this.word);
  }
}
