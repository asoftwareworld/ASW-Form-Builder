import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditSlideToggleComponent } from './edit-slide-toggle.component';

describe('EditSlideToggleComponent', () => {
  let component: EditSlideToggleComponent;
  let fixture: ComponentFixture<EditSlideToggleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditSlideToggleComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
