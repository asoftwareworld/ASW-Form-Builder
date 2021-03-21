/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component } from '@angular/core';

@Component({
  selector: 'asw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-builder-demo';
  jsonData: any[] = [];
  public width = window.innerWidth - 60;
  public height = window.innerHeight - 250;

  saveJsonData(data: any): void {
    console.log(data);
  }

  previewTemplate(data: any): void {
    this.jsonData = data;
  }
}
