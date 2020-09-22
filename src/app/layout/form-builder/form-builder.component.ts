import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../common/constants';
import { ConfirmDialogComponent } from '../shared-components/confirm-dialog/confirm-dialog.component';
import { ASWSettingsService } from '../shared-service/asw-settings.service';
import { EditTextboxComponent } from '../edit-controls/edit-text-box/edit-text-box.component';
import { EditMultiSelectComponent } from '../edit-controls/edit-multi-select/edit-multi-select.component';
import { EditButtonComponent } from '../edit-controls/edit-button/edit-button.component';
import { ButtonComponent } from './controls/button/button.component';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'asw-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
	@ViewChild(ButtonComponent) button;
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

  	openDialog(item: any, i: any): void {
		let dialogRef = this.dialog.open(ConfirmDialogComponent, {
			width: '350px',
			data: { name: item.name, message: this.constants.messages.waringMessage }
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result != undefined) {
				var item = this.formContainer.find(x=>x.name == result);
				console.log('The dialog was closed');
				this.formContainer.splice(i, 1);
				//this.animal = result;
			}
		});
	}

	updatedControl(data: any) {
		this.formContainer.splice(data.index, 1, data.control);
	}

	deleteControl(index: any) {
		this.formContainer.splice(index, 1);
	}

	editPropertyDialog(control: any, i: any): void {
		switch(control.controlType) {
			case 'multi-select':
				this.editMultiSelectProperty(control, i);
				break;
			case 'button':
				this.editButtonProperty(control, i);
				break;
			default:
				this.editTextBoxProperty(control, i);
				break;
		}
	}

	editTextBoxProperty(control: any, i: any):void {
		let dialogRef = this.dialog.open(EditTextboxComponent, {
			disableClose: true,
			width: '744px',
			data: control
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result != undefined) {
				debugger;
				var item = this.formContainer.find(x=>x.name == result);
				console.log('The dialog was closed');
				this.formContainer.splice(i, 1, result);
				//this.animal = result;
			}
		});
	}

	editMultiSelectProperty(control: any, i: any):void {
		let dialogRef = this.dialog.open(EditMultiSelectComponent, {
			disableClose: true,
			width: '744px',
			data: control
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result != undefined) {
				var item = this.formContainer.find(x=>x.name == result);
				console.log('The dialog was closed');
				this.formContainer.splice(i, 1, result);
				//this.animal = result;
			}
		});
	}

	editButtonProperty(control: any, i: any): void {
		let dialogRef = this.dialog.open(EditButtonComponent, {
			disableClose: true,
			width: '744px',
			data: control
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result != undefined) {
				var item = this.formContainer.find(x=>x.name == result);
				console.log('The dialog was closed');
				this.formContainer.splice(i, 1, result);
				//this.animal = result;
			}
		});
	}
}
