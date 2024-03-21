import { Component } from '@angular/core';
import { User } from '../../../_models/user';

@Component({
  selector: 'app-home-recruiter',
  templateUrl: './home-recruiter.component.html',
  styleUrl: './home-recruiter.component.scss'
})
export class HomeRecruiterComponent {
user :User= {
  email: '',
  password: '',
  fullName: '',
  role: 0,
  RoleName: 'Recruiter'
}
}
