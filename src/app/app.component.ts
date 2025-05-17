import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,JsonPipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Reactive-Forms';
  firstName: FormControl = new FormControl('',[Validators.required])
  lastName: FormControl = new FormControl('',[Validators.required])
  email: FormControl = new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]);
  passWord: FormControl = new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)]);


  onFormSubmit() {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.email);
  }
}
