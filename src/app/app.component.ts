import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Constants } from './layout/common/constants';

@Component({
  selector: 'asw-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constants: any = Constants;
    pageTitle: string;
    constructor(private titleService: Title,){}

    ngOnInit(): void {
        this.pageTitle = this.constants.titleMessages.homeTitle;
        this.titleService.setTitle(this.pageTitle);
    }
  
}
