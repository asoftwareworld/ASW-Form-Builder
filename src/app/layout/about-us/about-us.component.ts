import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Constants } from '../common/constants';

@Component({
    selector: 'asw-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
    constants: any = Constants;
    pageTitle: string;
    constructor(private titleService: Title,){}

    ngOnInit(): void {
        this.pageTitle = this.constants.titleMessages.aboutUsTitle;
        this.titleService.setTitle(this.pageTitle);
    }
}
