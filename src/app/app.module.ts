import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/home/about/about/about.component';
import { PostsComponent } from './components/home/posts/posts.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { NotificationsComponent } from './components/home/notifications/notifications.component';
import { PostComponent } from './components/home/posts/post/post.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { NotificationComponent } from './components/home/notifications/notification/notification.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeRecruiterComponent } from './components/home/home-recruiter/home-recruiter.component';
import { RegisterCandidateComponent } from './components/register/register-candidate/register-candidate.component';
import { RegisterRecruiterComponent } from './components/register/register-recruiter/register-recruiter.component';
import { RegisterManagerComponent } from './components/register/register-manager/register-manager.component';
import { RegisterAdminComponent } from './components/register/register-admin/register-admin.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    PostsComponent,
    NavbarComponent,
    NotificationsComponent,
    PostComponent,
    PostJobComponent,
    NotificationComponent,
    HomeRecruiterComponent,
    RegisterCandidateComponent,
    RegisterRecruiterComponent,
    RegisterManagerComponent,
    RegisterAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
