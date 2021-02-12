import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDatepickerComponent } from './edit-datepicker.component';

describe('EditDatepickerComponent', () => {
  let component: EditDatepickerComponent;
  let fixture: ComponentFixture<EditDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
