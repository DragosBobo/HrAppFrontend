import { Component } from '@angular/core';
import { CARPENTER_JOB_DESCRIPTION } from '../../test/test-Jd';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.scss'
})
export class PostJobComponent {

  jd = CARPENTER_JOB_DESCRIPTION;
constructor(private router:Router){
  
}
  onApply(){
    this.router.navigate(["/home"]);
  }
}
