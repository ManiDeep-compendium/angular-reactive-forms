import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormControlsAndValidationsComponent } from './Components/form-controls-and-validations/form-controls-and-validations.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  
}
