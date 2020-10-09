import { Component } from '@angular/core';

@Component({
  selector: 'asw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-builder-demo';

  saveJsonData(data: any){
    console.log(data);
  }
}
