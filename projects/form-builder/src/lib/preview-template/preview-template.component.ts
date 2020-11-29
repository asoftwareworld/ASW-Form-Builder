import { Component, Input, OnInit } from '@angular/core';
import { Constants } from '../common/constants';

@Component({
  selector: 'asw-preview-template',
  templateUrl: './preview-template.component.html'
})
export class PreviewTemplateComponent implements OnInit {
	constants: any = Constants;
	@Input() formContainer: any[];
	constructor() { }

	ngOnInit(): void {
		// this.formContainer = this.aswSettingsService.previewData;
	}
}
