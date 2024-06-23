import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-froms',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './froms.component.html',
  styleUrl: './froms.component.scss'
})
export class FromsComponent {
  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    name: ["", [Validators.required,Validators.minLength(3)]],
    phone_number: ["",Validators.required],
    city: [""]
  })

  onRegistration(e: any) {
    console.log(this.registrationForm.value)
    this.registrationForm.patchValue({ name: "jay", phone_number: "111", city: "asdsa" })
  }
}
