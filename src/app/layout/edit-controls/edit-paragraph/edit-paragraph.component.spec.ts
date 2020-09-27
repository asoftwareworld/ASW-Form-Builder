import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditParagraphComponent } from './edit-paragraph.component';

describe('EditParagraphComponent', () => {
  let component: EditParagraphComponent;
  let fixture: ComponentFixture<EditParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditParagraphComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
