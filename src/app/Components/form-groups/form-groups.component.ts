import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-form-groups',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-groups.component.html',
  styleUrl: './form-groups.component.less',
})
export class FormGroupsComponent implements OnInit {
  sighUpForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.initializeSignUpForm();
  }
  initializeSignUpForm() {
    /* this.sighUpForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      passWord: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)]),
      address: new FormControl('',[Validators.required]),
      city: new FormControl('',Validators.required),
      state: new FormControl(''),
      pinCode: new FormControl('',[Validators.required]),
    }); */

    this.sighUpForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      passWord: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/),
        ],
      ],
      address: ['', [Validators.required]],
      city: ['', Validators.required],
      state: [''],
      pinCode: ['', [Validators.required]],
    });
  }
  onFormSubmit() {
    if (this.sighUpForm.invalid) { this.sighUpForm.markAllAsTouched(); return };

    console.log(this.sighUpForm);
    console.log(this.sighUpForm.valid);
    console.log(this.sighUpForm.invalid);
    console.log(this.sighUpForm.value);
  }

  getFormControl(formControlName: string) {
    return this.sighUpForm.get(formControlName);
  }
}
