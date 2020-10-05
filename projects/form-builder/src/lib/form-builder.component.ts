import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from './common/constants';
import { JsonPreviewDialogComponent } from './shared-components/json-preview-dialog/json-preview-dialog.component';
import { ASWSettingsService } from './shared-service/asw-settings.service';

@Component({
  selector: 'asw-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  providers:[ASWSettingsService]
})
export class FormBuilderComponent implements OnInit {
	
  	constants: any = Constants;
	availableControls: any[] = [];
	formContainer: any[] = [];

	constructor(public dialog: MatDialog,
		private aswSettingsService: ASWSettingsService) { }

  	ngOnInit(): void {
		this.formContainer = this.aswSettingsService.previewData;
		//this.availableControls = this.components;
		this.aswSettingsService.getJSON().subscribe(data => {
			this.availableControls = data;
        });		
	}

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
		copyArrayItem(event.previousContainer.data,
							event.container.data,
							event.previousIndex,
							event.currentIndex);
		}
	}

	gridDrop(event: CdkDragDrop<string[]>) {
		debugger;
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
		copyArrayItem(event.previousContainer.data,
							event.container.data,
							event.previousIndex,
							event.currentIndex);
		}
	}

	updatedControl(data: any) {
		this.formContainer.splice(data.index, 1, data.control);
	}

	deleteControl(index: any) {
		this.formContainer.splice(index, 1);
	}
	
	// previewTemplate() {
	// 	this.aswSettingsService.previewData = this.formContainer;
	// 	this.router.navigate(['preview-template']);
	// }

	previewJsonData() {
		let dialogRef = this.dialog.open(JsonPreviewDialogComponent, {
			disableClose: true,
			width: '744px',
			data: this.formContainer
		});
		dialogRef.afterClosed();
	}

}
