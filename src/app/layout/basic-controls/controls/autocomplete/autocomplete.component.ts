import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Constants } from 'src/app/layout/common/constants';
import { EditSelectComponent } from 'src/app/layout/basic-controls/edit-controls/edit-select/edit-select.component';
import { ConfirmDialogComponent } from 'src/app/layout/shared-components/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'asw-autocomplete',
    templateUrl: './autocomplete.component.html'
})
export class AutocompleteComponent implements OnInit {

	constants: any = Constants;
	autocomplete = new FormControl();
    /**
     * Autocomplete control
     */
    @Input() control: any;

    /**
     * Autocomplete control index to help update or delete button from drop area
     */
    @Input() controlIndex: number;
	@Input() isPreviewTemplate: boolean = true;
	
    @Output() autocompleteUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() autocompleteDeleteEvent = new EventEmitter<number>();

	constructor(public dialog: MatDialog) { }
	
	filteredOptions: Observable<string[]>;

	ngOnInit() {
		this.filteredOptions = this.autocomplete.valueChanges.pipe(
			startWith(''),
			map(value => this._filter(value))
		);
	}

	private _filter(value: string): string[] {
		const filterValue = value.toLowerCase();
		return this.control.options.filter(option => option.value.toLowerCase().indexOf(filterValue) === 0);
	}
    
    /**
     * 
     * @param control 
     * @param controlIndex 
     */
  	deleteAutocompleteDialog(control: any, controlIndex: number): void {
		let dialogRef = this.dialog.open(ConfirmDialogComponent, {
			width: '350px',
			data: { name: control.name, message: this.constants.messages.waringMessage }
		});
		dialogRef.afterClosed().subscribe(result => {            
			if(result != undefined) {
                this.autocompleteDeleteEvent.emit(controlIndex);
			}
		});
	}

	editAutocompleteDialog(control: any, controlIndex: number): void {
		let dialogRef = this.dialog.open(EditSelectComponent, {
			disableClose: true,
			width: '744px',
			data: control
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result != undefined) {
				this.autocompleteUpdateEvent.emit({control: result, index: controlIndex});
			}
		});
	}
}
