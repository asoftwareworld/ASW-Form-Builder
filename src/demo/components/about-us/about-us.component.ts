import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';

@Component({
    selector: 'asw-about-us',
    templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {
    constants: any = Constants;
    pageTitle!: string;
    constructor(private titleService: Title){}

    ngOnInit(): void {
        this.pageTitle = this.constants.titleMessages.aboutUsTitle;
        this.titleService.setTitle(this.pageTitle);
    }
}
