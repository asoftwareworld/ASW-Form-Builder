import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../form-builder/common/constants';

@Component({
  selector: 'asw-preview-template',
  templateUrl: './preview-template.component.html'
})
export class PreviewTemplateComponent implements OnInit {
	
	constants: any = Constants;
	availableControls: any[] = [];
	formContainer: any[] = [];
	constructor(public dialog: MatDialog) { }

  	ngOnInit(): void {
		//this.formContainer = this.aswSettingsService.previewData;
	}	
}
