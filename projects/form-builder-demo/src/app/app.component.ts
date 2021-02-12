import { Component } from '@angular/core';

@Component({
  selector: 'asw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-builder-demo';
  jsonData: any[] = [];

  saveJsonData(data: any): void {
    console.log(data);
  }

  previewTemplate(data: any): void {
    this.jsonData = data;
  }
}
