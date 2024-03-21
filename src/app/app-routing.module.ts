import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { HomeRecruiterComponent } from './components/home/home-recruiter/home-recruiter.component';

const routes: Routes = [
  {path:"",component:RegisterComponent},
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"post",component:PostJobComponent},
  {path:"home-recruiter",component:HomeRecruiterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
