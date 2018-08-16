import { OnInit, Component, HostListener, Host } from '@angular/core';

@Component({
  selector: 'file-holder',
  template: `
    <style>
      .upload-drop-zone {
        height: 200px;
        border-width: 2px;
        margin-bottom: 20px;
      }
      .upload-drop-zone {
        color: #ccc;
        border-style: dashed;
        border-color: #ccc;
        line-height: 200px;
        text-align: center
      }
      .upload-drop-zone.drop {
        color: #222;
        border-color: #222;
      }
    </style>
    <h4>Or drag and drop files below</h4>
    <div class="upload-drop-zone" id="drop-zone" (drop)="onDrop($event)" (dragover)="onDragOver($event)">
      Just drag and drop files here
    </div>`
})
export class FileHolderComponent implements OnInit {

  private _dropZone: HTMLDivElement;

  ngOnInit() {
    this._dropZone = <HTMLDivElement> document.querySelector('#drop-zone');
  }

  @HostListener('drop', ['$event'])
  onDrop(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.startUpload((<any> event).dataTransfer.files);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  startUpload(files: any) {
    for (let file of files) {
      console.log('File(s) you dragged here: ', file.path);
    }
  }
}