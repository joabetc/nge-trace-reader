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
    <div id="holder" class="upload-drop-zone">
      Drag your file here
    </div>`
})
export class FileHolderComponent implements OnInit {

  private _element: Element;

  ngOnInit() {
    this._element = <HTMLDivElement> document.querySelector('#holder');
    this._element.addEventListener('drop', e => {
      e.preventDefault();
      e.stopPropagation();

      for (let f of (<any> e).dataTransfer.files) {
        console.log('File(s) you dragged here: ', f.path);
      }
    });
    this._element.addEventListener('dragover', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
}