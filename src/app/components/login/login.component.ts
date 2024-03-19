import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router : Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      
    });
  }
  onSubmit() {
    

    this.userService.login(this.loginForm.value).subscribe({
      next: (response) => {
      this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
