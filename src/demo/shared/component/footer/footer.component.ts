import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'asw-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
    test: Date = new Date();

    constructor() { }

    ngOnInit() {
    }

}
