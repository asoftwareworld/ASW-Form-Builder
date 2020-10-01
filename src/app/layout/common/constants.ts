import { environment } from '../../../environments/environment';

function getConstatnts() {
	
	const titleMessages = {
        homeTitle: 'ASW | Form Builder',
		aboutUsTitle: 'ASW | About Us',
        contactUsTitle: 'ASW | Contact Us',
    }

    const accountValidationMessages = {        
       'name': [
             { type: 'required', message: 'Name is required' },
             { type: 'minlength', message: 'Name must be at least 5 characters long' },
             { type: 'maxlength', message: 'Name cannot be more than 25 characters long' },
             { type: 'pattern', message: 'Your username must contain only numbers and letters' }
       ],
       'emailAddress': [
             { type: 'required', message: 'Email is required' },
             { type: 'email', message: 'Please enter a valid email address'},
             { type: 'pattern', message: 'Email format should be xyz@example.com' }
       ],
       'phoneNumber': [
             { type: 'required', message: 'Phone number is required' },
             { type: 'minlength', message: 'Phone number must be at least 10 characters long' },
             { type: 'maxlength', message: 'Phone number cannot be more than 10 characters long' },
       ],
       'message': [
             { type: 'required', message: 'Message is required' },
             { type: 'minlength', message: 'Message must be at least 6 characters long' },
             { type: 'maxlength', message: 'Message cannot be more than 255 characters long' },
        ],
        'label': [
            { type: 'required', message: 'Label is required' },
            { type: 'minlength', message: 'Label must be at least 5 characters long' },
            { type: 'maxlength', message: 'Label cannot be more than 25 characters long' }
        ],
        'maxlength': [
            { type: 'required', message: 'Maxlength is required' },
            { type: 'pattern', message: 'Maxlength must contain only numbers' },
        ],
    }

    const dataTypes = {
        dataTypeString: "string",
        dataTypeNumber: "number",
        dataTypeBoolean: "boolean"
    }

    const cssClass = {
        cssClassCardHidden: "quote-card-hidden",
        cssClassCardVisible: "quote-card-visible"
    }

    const matchPattern = {
        emailPattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
        passwordPattern: '((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})',
        phonePattern:'[6-9]\\d{9}',
        numberPattern:'^[0-9]*$'
    }

    const notificationMessage = {
        notificationDisplayDuration: 10000,
        errorNotification: "There is some problem. Please contact to administrator",
        emailSuccessNotification: "Thank you! Your message has been sent successfully."
    }

    const messages = {
        waringMessage: 'Are you sure you want to remove this field?',
        optionKeyValidationMessage: 'That option key is already exist. Try another.'
    }

    const applicationConstants = {
        applicationTitle: "ASW Form Build",
		titleMessages: titleMessages,
        accountValidationMessages: accountValidationMessages,
        cssClass: cssClass,
        dataTypes: dataTypes,
        matchPattern: matchPattern,
        notificationMessage: notificationMessage,
        messages: messages
    }

    return applicationConstants;
}

export const Constants = getConstatnts();
