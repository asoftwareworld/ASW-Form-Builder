import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AutocompleteComponent } from './autocomplete.component';

describe('AutocompleteComponent', () => {
  let component: AutocompleteComponent;
  let fixture: ComponentFixture<AutocompleteComponent>;
  let expectedControl: any;
  let controlDe: DebugElement;
  let controlEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteComponent);
    component = fixture.componentInstance;
    
    // mock the control supplied by the parent component
    expectedControl = {
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
    }

    // simulate the parent setting the input property with that control
    component.control = expectedControl;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
