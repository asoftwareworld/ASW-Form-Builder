import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from './common/constants';
import { JsonPreviewDialogComponent } from './shared-components/json-preview-dialog/json-preview-dialog.component';

const CONTROLS: any[] = [
	{ 
		'icon': 'title', 
		'displayName': 'Header', 
		'controlType': 'header', 
		'subtype': 'h1',
		'style':'text-left',
		'label': 'Header'
	},
	{
		'icon': 'corporate_fare',
		'displayName': 'Autocomplete',
		'controlType': 'autocomplete',
		'name': 'autocomplete',
		'tooltip': 'Select one',
		'label': 'Autocomplete',
		'style':'outline',
		'isRequired': false,
		'options': [
			{'key': 'option-1', 'value': 'Option 1'},
			{'key': 'option-2', 'value': 'Option 2'},
			{'key': 'option-3', 'value': 'Option 3'}
		]
	},
	{
	  'icon': 'text_fields',
	  'displayName': 'Textbox',
	  'controlType': 'textbox',
	  'name': 'Textbox',
	  'tooltip': 'Enter Text',
	  'type': 'text',
	  'label': 'TextBox',
	  'style':'outline',
	  'isRequired': false,
	  'maxlength': 50
	},
	{
		'icon': 'notes',
		'displayName': 'Text Area',
		'controlType': 'textarea',
		'name': 'textarea',
		'tooltip': 'Enter Text',
		'type': 'text',
		'label': 'TextArea',
		'style':'outline',
		'isRequired': false,
		'maxlength': 50
	},
	{
		'icon': 'event',
		'displayName': 'Datepicker',
		'controlType': 'datepicker',
		'name': 'datepicker',
		'tooltip': 'Choose a date',
		'label': 'Date Picker',
		'style':'outline',
		'isRequired': false
	},
	{
		'icon': 'arrow_drop_down_circle',
		'displayName': 'Select',
		'controlType': 'select',
		'name': 'select',
		'tooltip': 'Select option',
		'label': 'Select',
		'style':'outline',
		'isRequired': false,
		'options': [
			{'key': 'option-1', 'value': 'Option 1'},
			{'key': 'option-2', 'value': 'Option 2'},
			{'key': 'option-3', 'value': 'Option 3'}
		]
	},
	{
		'icon': 'storage',
		'displayName': 'Multi Select',
		'controlType': 'multi-select',
		'name': 'multi-select',
		'tooltip': 'Select options',
		'label': 'MultiSelect',
		'style':'outline',
		'isRequired': false,
		'options': [
			{'key': 'option-1', 'value': 'Option 1'},
			{'key': 'option-2', 'value': 'Option 2'},
			{'key': 'option-3', 'value': 'Option 3'}
		]
	},
	{
		'icon': 'radio_button_checked',
		'displayName': 'Radio Button',
		'controlType': 'radio',
		'name': 'radio',
		'tooltip': 'radio',
		'label': 'Radio',
		'isRequired': false,
		'options': [
			{'key': 'option-1', 'value': 'Option 1'},
			{'key': 'option-2', 'value': 'Option 2'},
			{'key': 'option-3', 'value': 'Option 3'}
		]
	},
	{
		'icon': 'check_box',
		'displayName': 'Checkbox',
		'controlType': 'checkbox',
		'name': 'checkbox',
		'tooltip': 'checkbox',
		'label': 'Checkbox',
		'isRequired': false,
		'options': [
			{'key': 'option-1', 'value': 'Option 1'},
			{'key': 'option-2', 'value': 'Option 2'},
			{'key': 'option-3', 'value': 'Option 3'}
		]
	},
	{
		'icon': 'touch_app',
		'displayName': 'Button',
		'controlType': 'button',
		'name': 'button',
		'tooltip': 'Click button',
		'label': 'Button',
		'type': 'button',
		'color':'primary',
		'style':'mat-raised-button',
		'isRequired': false
	},
	{
		'icon': 'format_textdirection_l_to_r',
		'displayName': 'Paragraph',
		'controlType': 'paragraph',
		'label': 'Paragraph',
		'subtype': 'p',
		'style':'text-left'
	},
	{
		'icon': 'horizontal_rule',
		'displayName': 'Divider',
		'controlType': 'divider'
	},
	{
		'icon': 'toggle_on',
		'displayName': 'Slide Toggle',
		'controlType': 'slide-toggle',
		'label': 'Slide me!',
		'color':'primary',
		'isRequired': false
	}
];

@Component({
  selector: 'asw-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
	
  	constants: any = Constants;
	availableControls: any[] = [];
	formContainer: any[] = [];

	@Output() onPublishedClick = new EventEmitter<any[]>();

	constructor(public dialog: MatDialog) { }

  	ngOnInit(): void {
		this.availableControls = CONTROLS;
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

	publishTemplate(): void {
		this.onPublishedClick.emit(this.formContainer);
	}
}
