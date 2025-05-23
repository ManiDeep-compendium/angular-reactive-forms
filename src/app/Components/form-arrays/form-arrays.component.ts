import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-arrays',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './form-arrays.component.html',
  styleUrl: './form-arrays.component.less',
})
export class FormArraysComponent implements OnInit {
  Address!: FormArray;
  private destroy$ = new Subject<void>();

  User!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms() {
    this.Address = new FormArray([new FormControl('')]);

    // console.log(this.Address.controls,'controls');

    this.User = this.fb.group({
      name: ['', Validators.required],
      skills: this.fb.array([this.fb.control('Angular')]),
    });

    this.skills.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      console.log(res, 'valuechanges');
    });
  }

  addFormControl() {
    this.Address.push(new FormControl('dynamicField'));
  }

  getFormControl(index: number) {
    return <FormControl>this.Address.controls[index];
  }

  get skills(): FormArray {
    return <FormArray>this.User.get('skills');
  }

  addSkill() {
    this.skills.push(this.fb.control('html'));
    // console.log(this.skills.controls,'raww')
  }

  onFormSubmit() {
    console.log(this.User.get('name')?.getRawValue(), 'name');
    console.log(this.User.get('skills')?.value, 'skills');
  }
  removeSkill(index: number): void {
    console.log(this.skills, 'skills');
    this.skills.removeAt(index, { emitEvent: false });
  }

  disableformField() {
    this.User.get('name')?.disable();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
