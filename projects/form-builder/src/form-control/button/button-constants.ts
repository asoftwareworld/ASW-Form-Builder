/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

function getConstatnts(): any {
    const validationMessages = {
        name: [
            { type: 'required', message: 'Name is required' },
            { type: 'minlength', message: 'Name must be at least 5 characters long' },
            { type: 'maxlength', message: 'Name cannot be more than 25 characters long' },
            { type: 'pattern', message: 'Your username must contain only numbers and letters' }
        ],
        label: [
            { type: 'required', message: 'Label is required' },
            { type: 'minlength', message: 'Label must be at least 5 characters long' },
            { type: 'maxlength', message: 'Label cannot be more than 25 characters long' }
        ]
    };

    const messages = {
        waringMessage: 'Are you sure you want to remove this field?'
    };

    const buttonConstants = {
        validationMessages,
        messages
    };

    return buttonConstants;
}

export const ButtonConstants = getConstatnts();
