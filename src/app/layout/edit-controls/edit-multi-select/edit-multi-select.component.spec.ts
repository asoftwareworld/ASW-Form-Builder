import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMultiSelectComponent } from './edit-multi-select.component';

describe('MultiSelectPropertyComponent', () => {
  let component: EditMultiSelectComponent;
  let fixture: ComponentFixture<EditMultiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditMultiSelectComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
