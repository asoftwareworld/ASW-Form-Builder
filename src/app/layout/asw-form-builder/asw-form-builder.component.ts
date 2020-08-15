import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, copyArrayItem} from '@angular/cdk/drag-drop';
import {Control} from './control';
import { MatDialog } from '@angular/material/dialog';
import { CommonMessages } from '../common/common-messages';
import { ConfirmDialogComponent } from '../shared-components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'asw-form-builder',
  templateUrl: './asw-form-builder.component.html',
  styleUrls: ['./asw-form-builder.component.scss']
})
export class AswFormBuilderComponent implements OnInit {
  availableControls: Array<Control> = [];
  options: any[];
  formContainer: Array<Control> = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.availableControls.push(new Control('article', 'Textbox', 'textbox', 'textBox', 'Enter Text', 'text', 'TextBox', this.options = []));
		this.availableControls.push(new Control('article', 'Text Area', 'textarea', 'textarea', 'Enter Text','text', 'TextArea', this.options = []));
		this.availableControls.push(new Control('arrow_drop_down_circle', 'Dropdown', 'dropdown', 'dropdown', 'Select option','text', 'Drop-Down', this.options = [
			{value: 'steak-0', viewValue: 'Steak'},
			{value: 'pizza-1', viewValue: 'Pizza'},
			{value: 'tacos-2', viewValue: 'Tacos'}
		]));
		this.availableControls.push(new Control('event', 'Datepicker','datepicker', 'datepicker', 'Choose a date','text', 'Date Picker', this.options = []));
		this.availableControls.push(new Control('adjust', 'Radio Button', 'radio', 'radio', 'radio','text', 'Radio', this.options = [
			{value: 'steak-0', viewValue: 'Steak'},
			{value: 'pizza-1', viewValue: 'Pizza'},
			{value: 'tacos-2', viewValue: 'Tacos'}
		]));
		this.availableControls.push(new Control('dashboard', 'Multi Select', 'multi-select', 'multi-select', 'Select options','text', 'MultiSelect', this.options = [
			{value: 'steak-0', viewValue: 'Steak'},
			{value: 'pizza-1', viewValue: 'Pizza'},
			{value: 'tacos-2', viewValue: 'Tacos'}
		]));
		this.availableControls.push(new Control('dashboard', 'Grid', 'grid', 'textarea', 'Enter Text','text', 'Grid', this.options = [
			{text: 'One', cols: 3, rows: 1, color: 'lightblue'},
			{text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
			{text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
			{text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
		]));
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
		data: { name: item.name, message: CommonMessages.WaringMessage }
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

}
