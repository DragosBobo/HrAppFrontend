import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-candidate',
  templateUrl: './register-candidate.component.html',
  styleUrl: './register-candidate.component.scss'
})
export class RegisterCandidateComponent implements OnInit {
  registerForm!: FormGroup ;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName:['', Validators.required],
      pathToCV:['', Validators.required],
      birthDay:['', Validators.required],
      phone:['', Validators.required],
      role: [0, Validators.required] 
    });
  }

  onSubmit(){
    console.log("submit :" + this.registerForm);
  }
}
