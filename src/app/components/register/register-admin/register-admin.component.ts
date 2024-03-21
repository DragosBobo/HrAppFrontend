import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrl: './register-admin.component.scss'
})
export class RegisterAdminComponent  implements OnInit {
  registerForm!: FormGroup ;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      fullName: ['', Validators.required],
      role: [0, Validators.required] 
    });
  }

  onSubmit(){
    console.log("submit :" + this.registerForm);
  }
}
