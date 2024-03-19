import { Component, Input } from '@angular/core';
import { Post } from '../../../../_models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})

export class PostComponent {
@Input() post?:Post



}
