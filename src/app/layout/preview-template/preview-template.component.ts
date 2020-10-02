import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Constants } from '../common/constants';
import { ASWSettingsService } from '../shared-service/asw-settings.service';

@Component({
  selector: 'asw-preview-template',
  templateUrl: './preview-template.component.html'
})
export class PreviewTemplateComponent implements OnInit {
	
	constants: any = Constants;
	availableControls: any[] = [];
	formContainer: any[] = [];
	constructor(public dialog: MatDialog,
		private aswSettingsService: ASWSettingsService,
		private router: Router) { }

  	ngOnInit(): void {
		this.formContainer = this.aswSettingsService.previewData;
	}	
}
