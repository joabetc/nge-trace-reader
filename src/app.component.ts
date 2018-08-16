import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { FileHolderComponent } from './file-holder/file-holder.component';

@Component({
  selector: 'App',
  template:
  `<div>
    <h4>Select files from your computer</h4>
    <form action="" method="post" enctype="multipart/form-data" id="js-upload-form">
      <div class="form-inline">
        <div class="form-group">
          <input type="file" name="files[]" id="js-upload-files" multiple>
        </div>
        <button type="submit" class="btn btn-sm btn-primary" id="js-upload-submit">Upload files</button>
      </div>
    </form>
    <file-holder></file-holder>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
        <span class="sr-only">60% Complete</span>
      </div>
    </div>
    <div class="js-upload-finished">
      <h3>Processed files</h3>
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-success"><span class="badge alert-success pull-right">Success</span>image-01.jpg</a>
        <a href="#" class="list-group-item list-group-item-success"><span class="badge alert-success pull-right">Success</span>image-02.jpg</a>
      </div>
    </div>
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