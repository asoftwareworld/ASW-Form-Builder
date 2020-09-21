import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Constants } from '../common/constants';
//import { NotificationService } from 'app/shared-services/notification.service';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss'],
    //providers: [NotificationService]
})
export class ContactUsComponent implements OnInit {
    constants: any = Constants;
    contactForm: FormGroup;
    pageTitle: string;
    constructor(private titleService: Title,
        private formBuilder: FormBuilder,
        //private notificationService: NotificationService
    ) { }

    ngOnInit() {
        this.pageTitle = this.constants.titleMessages.contactUsTitle;
        this.titleService.setTitle(this.pageTitle);
        this.contactForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
            emailAddress: ['', [Validators.required, Validators.email, Validators.pattern(this.constants.matchPattern.emailPattern)]],
            phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            message: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]]
        });
    }

    onSubmit() {
        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }
        //this.notificationService.openSnackBarNotification('Message send successfully.', null);
    }

}
