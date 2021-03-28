/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, Input } from '@angular/core';
import { Constants } from '../form-control/common/constants';

@Component({
  selector: 'asw-preview-template',
  templateUrl: './preview-template.component.html'
})
export class PreviewTemplateComponent {
  constants: any = Constants;
  @Input() formContainer: any[];
}
