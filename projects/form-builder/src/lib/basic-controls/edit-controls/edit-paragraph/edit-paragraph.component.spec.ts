import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditParagraphComponent } from './edit-paragraph.component';

describe('EditParagraphComponent', () => {
  let component: EditParagraphComponent;
  let fixture: ComponentFixture<EditParagraphComponent>;

  beforeEach(waitForAsync(() => {
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
