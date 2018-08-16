import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { FileHolderComponent } from './file-holder/file-holder.component';

@Component({
  selector: 'App',
  template:
  `<div>
    <h2>Welcome to {{name}} Angular2!</h2>
    <file-holder></file-holder>
  </div>`
})
export class AppComponent implements OnInit {
  public readonly name = 'electron-forge';

  ngOnInit(): void {
    console.log('component initialized');
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, FileHolderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }