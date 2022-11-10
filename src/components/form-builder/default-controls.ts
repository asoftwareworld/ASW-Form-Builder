/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

export const SIMPLE_CONTROLS = [
    {
        icon: 'title',
        displayName: 'Header',
        controlType: 'header',
        subtype: 'h1',
        style: 'text-left',
        label: 'Header',
        column: 'col-md-12',
    },
    {
        id: '1',
        icon: 'text_fields',
        displayName: 'Text Field',
        controlType: 'textfield',
        tooltip: 'Enter Text',
        value: '',
        label: 'Text Field',
        style: 'outline',
        column: 'col-md-6',
        isRequired: false,
        isDisabled: false,
        maxlength: 50,
        minlength: 0
    },
    {
        id: '1',
        icon: 'short_text',
        displayName: 'Text Area',
        controlType: 'textarea',
        tooltip: 'Enter Text',
        value: '',
        label: 'Text Area',
        style: 'outline',
        column: 'col-md-6',
        isRequired: false,
        isDisabled: false,
        maxlength: 50,
        minlength: 0
    },
    {
        id: '1',
        icon: 'numbers',
        displayName: 'Number',
        controlType: 'number',
        tooltip: 'Enter Number',
        value: '',
        label: 'Number',
        style: 'outline',
        column: 'col-md-6',
        isRequired: false,
        isDisabled: false,
        maxlength: 50,
        minlength: 0
    },
    {
        icon: 'calculate',
        displayName: 'Calculation',
        controlType: 'calculation',
        tooltip: 'Enter calculation',
        value: '',
        label: 'Calculation',
        placeholder: 'Field 1 + Field 2 = ',
        style: 'outline',
        column: 'col-md-6',
        operations: []
    },
    {
        id: '1',
        icon: 'subject',
        displayName: 'Paragraph',
        controlType: 'paragraph',
        label: 'Paragraph',
        column: 'col-md-12',
        subtype: 'p',
        style: 'text-left'
    },
    {
        icon: 'horizontal_rule',
        displayName: 'Divider',
        controlType: 'divider',
        column: 'col-md-12'
    },
    {
        icon: 'toggle_on',
        displayName: 'Slide Toggle',
        controlType: 'slide-toggle',
        label: 'Slide me!',
        value: false,
        color: 'primary',
        column: 'col-md-2',
        isRequired: false,
        isDisabled: false
    },
    {
        id: '1',
        icon: 'touch_app',
        displayName: 'Button',
        controlType: 'button',
        tooltip: 'Click button',
        label: 'Submit',
        type: 'button',
        column: 'col-md-2',
        color: 'primary',
        style: 'mat-raised-button'
    }
];

export const CHOICE_CONTROLS = [
    {
        id: '1',
        icon: 'corporate_fare',
        displayName: 'Autocomplete',
        controlType: 'autocomplete',
        tooltip: 'Select one',
        label: 'Autocomplete',
        column: 'col-md-6',
        style: 'outline',
        isRequired: false,
        isDisabled: false,
        options: [
            { key: 'option-1', value: 'Option 1', isChecked: false },
            { key: 'option-2', value: 'Option 2', isChecked: false },
            { key: 'option-3', value: 'Option 3', isChecked: false }
        ]
    },
    {
        id: '1',
        icon: 'fact_check',
        displayName: 'Select',
        controlType: 'select',
        tooltip: 'Select option',
        label: 'Select',
        style: 'outline',
        column: 'col-md-6',
        value: '',
        isRequired: false,
        isDisabled: false,
        options: [
            { key: 'option-1', value: 'Option 1', isChecked: false },
            { key: 'option-2', value: 'Option 2', isChecked: false },
            { key: 'option-3', value: 'Option 3', isChecked: false }
        ]
    },
    {
        id: '1',
        icon: 'checklist',
        displayName: 'Multi Select',
        controlType: 'multi-select',
        tooltip: 'Select options',
        label: 'Multi Select',
        column: 'col-md-6',
        value: '',
        style: 'outline',
        isRequired: false,
        isDisabled: false,
        options: [
            { key: 'option-1', value: 'Option 1', isChecked: false },
            { key: 'option-2', value: 'Option 2', isChecked: false },
            { key: 'option-3', value: 'Option 3', isChecked: false }
        ]
    },
    {
        id: '1',
        icon: 'radio_button_checked',
        displayName: 'Radio Button',
        controlType: 'radio',
        tooltip: 'radio',
        label: 'Radio',
        value: 'option-1',
        column: 'col-md-6',
        isRequired: false,
        isDisabled: false,
        options: [
            { key: 'option-1', value: 'Option 1', isChecked: false },
            { key: 'option-2', value: 'Option 2', isChecked: false },
            { key: 'option-3', value: 'Option 3', isChecked: false }
        ]
    },
    {
        id: '1',
        icon: 'check_box',
        displayName: 'Checkbox',
        controlType: 'checkbox',
        tooltip: 'checkbox',
        label: 'Checkbox',
        column: 'col-md-6',
        isRequired: false,
        isDisabled: false,
        options: [
            { key: 'option-1', value: 'Option 1', isChecked: false },
            { key: 'option-2', value: 'Option 2', isChecked: false },
            { key: 'option-3', value: 'Option 3', isChecked: false }
        ]
    }
];

export const DATE_AND_GPS_CONTROLS = [
    {
        id: '1',
        icon: 'event',
        displayName: 'Datepicker',
        controlType: 'datepicker',
        value: '',
        tooltip: 'Choose a date',
        label: 'Date Picker',
        style: 'outline',
        column: 'col-md-6',
        isRequired: false,
        isWeekendsDisable: false,
        isDisabled: false,
    },
    {
        id: '1',
        icon: 'near_me',
        displayName: 'GPS',
        controlType: 'gps',
        label: 'Gps',
        tooltip: 'Enter Location',
        latitude: '',
        longitude: '',
        style: 'outline',
        column: 'col-md-6',
        value: '',
        isRequired: false,
        isDisabled: false,
    }
];

export const DIGITAL_CONTROLS = [
    {
        icon: 'image',
        displayName: 'Image',
        controlType: 'image',
        label: 'Image',
        column: 'col-md-12',
        class: 'text-left text-start',
        imageShape: 'asw-original',
        height: 150,
        width: 150,
        imageUrl: ''
    },
    {
        icon: 'gesture',
        displayName: 'Signature',
        controlType: 'signature',
        label: 'Signature',
        class: 'text-left text-start',
        imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIATgDUgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAACP/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==',
        column: 'col-md-12',
        height: '80',
        width: '120'
    },
    {
        icon: 'draw',
        displayName: 'Drawing',
        controlType: 'drawing',
        label: 'Image',
        class: 'text-left text-start',
        imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIATgDUgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAACP/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==',
        column: 'col-md-12',
        isRequired: false,
        height: '200',
        width: '600'
    }
];

export const OTHERS_CONTROLS = [
    // {
    //     id: '1',
    //     icon: 'cloud_upload',
    //     displayName: 'File Upload',
    //     controlType: 'fileupload',
    //     label: 'File Upload',
    //     column: 'col-md-12',
    //     value: [],
    //     isRequired: false
    // },
    {
        icon: 'qr_code_2',
        displayName: 'QR Code',
        controlType: 'qr-code',
        centerImageSize: '30',
        centerImage: 'https://raw.githubusercontent.com/asoftwareworld/ASW-Form-Builder/master/asw.png',
        qrCodeSize: 240,
        errorCorrectionLevel: 'M',
        column: 'col-md-12',
        value: 'https://asoftwareworld.github.io/form-builder'
    },
];
