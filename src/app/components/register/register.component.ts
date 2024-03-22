// src/app/register/register.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';
import { user } from '../../test/test-user';
import { User } from '../../_models/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup ;
  currentUser?:User = user;
  role?:string ="candidate";
  constructor(private formBuilder: FormBuilder, private userService: UserService,private router: Router) {
   
  }
  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      fullName: ['', Validators.required],
      role: [0, Validators.required] // presupunem că rolul este un număr
    });

  }

  onSubmit() {
    

    this.userService.register(this.registerForm.value).subscribe({
      next: (response) => {
       this.router.navigate(["/login"]);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
