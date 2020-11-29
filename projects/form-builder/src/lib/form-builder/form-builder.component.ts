import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from './../common/constants';
import { JsonPreviewDialogComponent } from './../shared-components/json-preview-dialog/json-preview-dialog.component';

const CONTROLS: any[] = [
	{
		icon: 'title',
		displayName: 'Header',
		controlType: 'header',
		subtype: 'h1',
		style: 'text-left',
		label: 'Header'
	},
	{
        icon: 'image',
        displayName: 'Image',
		controlType: 'image',
		label: 'Image',
        imageUrl: 'data:image/png;base64,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'
    },
	{
		icon: 'corporate_fare',
		displayName: 'Autocomplete',
		controlType: 'autocomplete',
		name: 'autocomplete',
		tooltip: 'Select one',
		label: 'Autocomplete',
		style: 'outline',
		isRequired: false,
		options: [
			{key: 'option-1', value: 'Option 1'},
			{key: 'option-2', value: 'Option 2'},
			{key: 'option-3', value: 'Option 3'}
		]
	},
	{
	  icon: 'text_fields',
	  displayName: 'Textbox',
	  controlType: 'textbox',
	  name: 'Textbox',
	  tooltip: 'Enter Text',
	  value: '',
	  type: 'text',
	  label: 'TextBox',
	  style: 'outline',
	  isRequired: false,
	  maxlength: 50
	},
	{
		icon: 'notes',
		displayName: 'Text Area',
		controlType: 'textarea',
		name: 'textarea',
		tooltip: 'Enter Text',
		value: '',
		type: 'text',
		label: 'TextArea',
		style: 'outline',
		isRequired: false,
		maxlength: 50
	},
	{
		icon: 'event',
		displayName: 'Datepicker',
		controlType: 'datepicker',
		name: 'datepicker',
		tooltip: 'Choose a date',
		label: 'Date Picker',
		style: 'outline',
		isRequired: false
	},
	{
		icon: 'arrow_drop_down_circle',
		displayName: 'Select',
		controlType: 'select',
		name: 'select',
		tooltip: 'Select option',
		label: 'Select',
		style: 'outline',
		isRequired: false,
		options: [
			{key: 'option-1', value: 'Option 1'},
			{key: 'option-2', value: 'Option 2'},
			{key: 'option-3', value: 'Option 3'}
		]
	},
	{
		icon: 'storage',
		displayName: 'Multi Select',
		controlType: 'multi-select',
		name: 'multi-select',
		tooltip: 'Select options',
		label: 'MultiSelect',
		style: 'outline',
		isRequired: false,
		options: [
			{key: 'option-1', value: 'Option 1'},
			{key: 'option-2', value: 'Option 2'},
			{key: 'option-3', value: 'Option 3'}
		]
	},
	{
		icon: 'radio_button_checked',
		displayName: 'Radio Button',
		controlType: 'radio',
		name: 'radio',
		tooltip: 'radio',
		label: 'Radio',
		isRequired: false,
		options: [
			{key: 'option-1', value: 'Option 1'},
			{key: 'option-2', value: 'Option 2'},
			{key: 'option-3', value: 'Option 3'}
		]
	},
	{
		icon: 'check_box',
		displayName: 'Checkbox',
		controlType: 'checkbox',
		name: 'checkbox',
		tooltip: 'checkbox',
		label: 'Checkbox',
		isRequired: false,
		options: [
			{key: 'option-1', value: 'Option 1'},
			{key: 'option-2', value: 'Option 2'},
			{key: 'option-3', value: 'Option 3'}
		]
	},
	{
		icon: 'touch_app',
		displayName: 'Button',
		controlType: 'button',
		name: 'button',
		tooltip: 'Click button',
		label: 'Button',
		type: 'button',
		color: 'primary',
		style: 'mat-raised-button',
		isRequired: false
	},
	{
		icon: 'format_textdirection_l_to_r',
		displayName: 'Paragraph',
		controlType: 'paragraph',
		label: 'Paragraph',
		subtype: 'p',
		style: 'text-left'
	},
	{
		icon: 'horizontal_rule',
		displayName: 'Divider',
		controlType: 'divider'
	},
	{
		icon: 'toggle_on',
		displayName: 'Slide Toggle',
		controlType: 'slide-toggle',
		label: 'Slide me!',
		color: 'primary',
		isRequired: false
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

	@Output() previewClick = new EventEmitter<any[]>();
	@Output() publishClick = new EventEmitter<any[]>();

	constructor(public dialog: MatDialog) { }

  	ngOnInit(): void {
		this.availableControls = CONTROLS;
	}

	drop(event: CdkDragDrop<string[]>): void {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
		copyArrayItem(event.previousContainer.data,
							event.container.data,
							event.previousIndex,
							event.currentIndex);
		}
	}

	gridDrop(event: CdkDragDrop<string[]>): void {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
		copyArrayItem(event.previousContainer.data,
							event.container.data,
							event.previousIndex,
							event.currentIndex);
		}
	}

	updatedControl(data: any): void {
		this.formContainer.splice(data.index, 1, data.control);
	}

	deleteControl(index: any): void {
		this.formContainer.splice(index, 1);
	}
	
	previewTemplate(): void {
		this.previewClick.emit(this.formContainer)
	}
	
	previewJsonData() {
		let dialogRef = this.dialog.open(JsonPreviewDialogComponent, {
			disableClose: true,
			width: '744px',
			data: this.formContainer
		});
		dialogRef.afterClosed();
	}

	publishTemplate(): void {
		this.publishClick.emit(this.formContainer);
	}
}
