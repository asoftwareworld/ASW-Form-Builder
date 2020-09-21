import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { Control } from './control';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../common/constants';
import { ConfirmDialogComponent } from '../shared-components/confirm-dialog/confirm-dialog.component';
import { AswEditPropertyComponent } from '../asw-edit-property/asw-edit-property.component';
import { ASWSettingsService } from '../shared-service/asw-settings.service';

@Component({
  selector: 'asw-form-builder',
  templateUrl: './asw-form-builder.component.html',
  styleUrls: ['./asw-form-builder.component.scss']
})
export class AswFormBuilderComponent implements OnInit {
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

	aswEditPropertyDialog(control: any, i: any): void {
		let dialogRef = this.dialog.open(AswEditPropertyComponent, {
			disableClose: true,
			width: '744px',
			data: control
		});
		dialogRef.afterClosed().subscribe(result => {
			debugger;
			if(result != undefined) {
				var item = this.formContainer.find(x=>x.name == result);
				console.log('The dialog was closed');
				this.formContainer.splice(i, 1, result);
				//this.animal = result;
			}
		});
	}
}
