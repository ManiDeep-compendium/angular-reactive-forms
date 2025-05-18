import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlsAndValidationsComponent } from './form-controls-and-validations.component';

describe('FormControlsAndValidationsComponent', () => {
  let component: FormControlsAndValidationsComponent;
  let fixture: ComponentFixture<FormControlsAndValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlsAndValidationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlsAndValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
