import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditHeaderComponent } from './edit-header.component';

describe('EditHeaderComponent', () => {
  let component: EditHeaderComponent;
  let fixture: ComponentFixture<EditHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditHeaderComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
