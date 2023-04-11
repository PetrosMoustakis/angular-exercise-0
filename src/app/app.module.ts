// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// // import { Component, EventEmitter, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { AppComponent } from './app.component';
// import { UserInputComponent } from './user-input/user-input.component';
// import { EvenLengthWordsComponent } from './even-length-words/even-length-words.component';
// import { OddLengthWordsComponent } from './odd-length-words/odd-length-words.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     UserInputComponent,
//     EvenLengthWordsComponent,
//     OddLengthWordsComponent,
//   ],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { EvenLengthWordsComponent } from './even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from './odd-length-words/odd-length-words.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    EvenLengthWordsComponent,
    OddLengthWordsComponent,
  ],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

