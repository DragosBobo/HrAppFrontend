import { Component, Input } from '@angular/core';
import { Post } from '../../../../_models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})

export class PostComponent {
@Input() post?:Post
constructor(private router:Router)
{

}
onPostCLick(){
  this.router.navigate(["/post"])
}

}
