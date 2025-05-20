import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-controls-and-validations',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-controls-and-validations.component.html',
  styleUrl: './form-controls-and-validations.component.less',
})
export class FormControlsAndValidationsComponent implements OnInit {
  private destroy$ = new Subject<void>();
  title = 'Reactive-Forms';
  firstName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  ]);
  passWord: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/),
  ]);

  rupeeVal: FormControl = new FormControl();
  usdVal: number = 0;

  ngOnInit(): void {
    this.rupeeVal.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (this.rupeeVal.value) {
        this.usdVal = this.rupeeVal.value * 85.6;
      } else {
        this.usdVal = 0;
      }
    });
  }
  onFormSubmit() {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.email);

    if (this.passWord.invalid) {
      this.passWord.markAsTouched();
    }
  }

  setEmail() {
    /* Set Dynamic Values To the Form Controls at any point of time, 
    here in my case setting a dynamic value to email formcontrol on click action */
    this.email.setValue('manideepg1998@gmail.com');
  }

  /* Set & Update Dynamic Validators for FormControls  */
  updateValidations(forFormControl?: string) {
    if (forFormControl == 'firstName') {
      this.firstName.setValidators([Validators.required]);
      this.firstName.updateValueAndValidity();
    } else if (forFormControl == 'lastName') {
      this.lastName.clearValidators();
      this.lastName.updateValueAndValidity();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
