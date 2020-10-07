import { Component } from '@angular/core';

@Component({
  selector: 'asw-root',
  template: `
  <asw-form-builder (onPublishedClick)="saveJsonData($event)"></asw-form-builder>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-builder-demo';

  saveJsonData(data: any){
    debugger;
    console.log(data);
  }
}
