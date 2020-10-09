import { Component } from '@angular/core';

@Component({
  selector: 'asw-root',
  template: `
  <asw-form-builder (publishClick)="saveJsonData($event)"></asw-form-builder>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-builder-demo';

  saveJsonData(data: any){
    console.log(data);
  }
}
