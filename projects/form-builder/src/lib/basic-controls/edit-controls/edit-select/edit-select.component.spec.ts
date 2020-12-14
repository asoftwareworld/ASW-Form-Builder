import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditSelectComponent } from './edit-select.component';

describe('EditSelectComponent', () => {
  let component: EditSelectComponent;
  let fixture: ComponentFixture<EditSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
