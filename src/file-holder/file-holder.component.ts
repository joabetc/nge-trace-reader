import { OnInit, Component } from '@angular/core';

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
    <div class="upload-drop-zone" id="drop-zone" >
      Just drag and drop files here
    </div>`
})
export class FileHolderComponent implements OnInit {

  private _dropZone: Element;

  ngOnInit() {
    this._dropZone = <HTMLDivElement> document.querySelector('#drop-zone');
    /*this._dropZone.addEventListener('drop', e => {
      e.preventDefault();
      e.stopPropagation();

      for (let f of (<any> e).dataTransfer.files) {
        console.log('File(s) you dragged here: ', f.path);
      }
    });
    this._dropZone.addEventListener('dragover', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });*/
  }

  onDrop(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.startUpload((<any> event).dataTransfer.files);
  }

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