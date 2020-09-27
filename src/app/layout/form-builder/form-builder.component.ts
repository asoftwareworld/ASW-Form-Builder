import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../common/constants';
import { ASWSettingsService } from '../shared-service/asw-settings.service';

@Component({
  selector: 'asw-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
	
	constants: any = Constants;
	availableControls: any[] = [];
	formContainer: any[] = [];
	constructor(public dialog: MatDialog,
		private aswSettingsService: ASWSettingsService) { }

  	ngOnInit(): void {
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

	updatedControl(data: any) {
		this.formContainer.splice(data.index, 1, data.control);
	}

	deleteControl(index: any) {
		debugger;
		this.formContainer.splice(index, 1);
	}	
}
