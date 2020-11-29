import { Component, Input, OnInit } from '@angular/core';
import { Constants } from '../common/constants';

@Component({
  selector: 'asw-preview-template',
  templateUrl: './preview-template.component.html'
})
export class PreviewTemplateComponent {
	constants: any = Constants;
	@Input() formContainer: any[];
}
