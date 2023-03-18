/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

function getConstatnts(): any {

    const defaultImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIATgDUgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAACP/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==';
    const titleMessages = {
        homeTitle: 'ASW | Form Builder',
        aboutUsTitle: 'ASW | About Us',
        contactUsTitle: 'ASW | Contact Us',
    };

    const accountValidationMessages = {
        name: [
            { type: 'required', message: 'Name is required.' },
            { type: 'minlength', message: 'Name must be at least 5 characters long.' },
            { type: 'maxlength', message: 'Name cannot be more than 25 characters long.' },
            { type: 'pattern', message: 'Your username must contain only numbers and letters.' }
        ],
        emailAddress: [
            { type: 'required', message: 'Email is required.' },
            { type: 'email', message: 'Please enter a valid email address.' },
            { type: 'pattern', message: 'Email format should be xyz@example.com.' }
        ],
        phoneNumber: [
            { type: 'required', message: 'Phone number is required.' },
            { type: 'minlength', message: 'Phone number must be at least 10 characters long.' },
            { type: 'maxlength', message: 'Phone number cannot be more than 10 characters long.' },
        ],
        message: [
            { type: 'required', message: 'Message is required.' },
            { type: 'minlength', message: 'Message must be at least 6 characters long.' },
            { type: 'maxlength', message: 'Message cannot be more than 255 characters long.' },
        ],
        label: [
            { type: 'required', message: 'Label is required.' },
            { type: 'minlength', message: 'Label must be at least 5 characters long.' },
            { type: 'maxlength', message: 'Label cannot be more than 25 characters long.' }
        ],
        maxlength: [
            { type: 'required', message: 'Maxlength is required.' },
            { type: 'pattern', message: 'Maxlength must contain only numbers.' },
        ],
        minlength: [
            { type: 'required', message: 'Minlength is required.' },
            { type: 'pattern', message: 'Minlength must contain only numbers.' },
        ],
        key: [
            { type: 'required', message: 'Option key is required.' },
            { type: 'minlength', message: 'Sorry, your option key must be between 1 and 50 characters long.' },
            { type: 'pattern', message: 'Sorry, only letters (a-z), numbers (0-9), and periods (- and _) are allowed.' },
            { type: 'unique', message: 'Option key is already exist. Try another.' }
        ],
        value: [
            { type: 'required', message: 'Option value is required.' },
            { type: 'minlength', message: 'Sorry, your option value must be between 1 and 999 characters long.' }
        ],
        searchAddress: [
            { type: 'unique', message: 'Searched address not found.' }
        ],
        id: [
            { type: 'required', message: 'Unique id is required.' }
        ],
        operationValue: [
            { type: 'required', message: 'Operation is required.' }
        ],
        control: [
            { type: 'required', message: 'Operator is required.' },
        ],
        width: [
            { type: 'required', messages: 'Width is required.'},
            { type: 'max', message: 'Please enter a value between 0 and 600' }
        ],
        height: [
            { type: 'required', messages: 'Height is required.'},
            { type: 'max', message: 'Please enter a value between 0 and 600' }
        ]
    };

    const columns = [
        {
            value: 'col-md-1',
            label: 'Column 1'
        },
        {
            value: 'col-md-2',
            label: 'Column 2'
        },
        {
            value: 'col-md-3',
            label: 'Column 3'
        },
        {
            value: 'col-md-4',
            label: 'Column 4'
        },
        {
            value: 'col-md-5',
            label: 'Column 5'
        },
        {
            value: 'col-md-6',
            label: 'Column 6'
        },
        {
            value: 'col-md-7',
            label: 'Column 7'
        },
        {
            value: 'col-md-8',
            label: 'Column 8'
        },
        {
            value: 'col-md-9',
            label: 'Column 9'
        },
        {
            value: 'col-md-10',
            label: 'Column 10'
        },
        {
            value: 'col-md-11',
            label: 'Column 11'
        },
        {
            value: 'col-md-12',
            label: 'Column 12'
        }
    ];

    const operations = [
        {
            value: '+',
            label: 'Addition'
        },
        {
            value: '-',
            label: 'Subtraction'
        },
        {
            value: '*',
            label: 'Multiplication'
        },
        {
            value: '/',
            label: 'Division'
        },
        {
            value: 'x̄',
            label: 'Average'
        },
    ];

    const dataTypes = {
        dataTypeString: 'string',
        dataTypeNumber: 'number',
        dataTypeBoolean: 'boolean'
    };

    const cssClass = {
        cssClassCardHidden: 'quote-card-hidden',
        cssClassCardVisible: 'quote-card-visible'
    };

    const matchPattern = {
        emailPattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
        passwordPattern: '((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})',
        phonePattern: '[6-9]\\d{9}',
        numberPattern: '^[0-9]*$'
    };

    const notificationMessage = {
        notificationDisplayDuration: 10000,
        errorNotification: 'There is some problem. Please contact to administrator',
        emailSuccessNotification: 'Thank you! Your message has been sent successfully.'
    };

    const messages = {
        waringMessage: 'Are you sure you want to remove this field?',
        optionKeyValidationMessage: 'That option key is already exist. Try another.'
    };

    const applicationConstants = {
        applicationTitle: 'ASW Form Build',
        titleMessages,
        accountValidationMessages,
        cssClass,
        dataTypes,
        matchPattern,
        notificationMessage,
        messages,
        columns,
        operations,
        defaultImage
    };

    return applicationConstants;
}

export const Constants = getConstatnts();
