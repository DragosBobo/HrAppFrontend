import { Component } from '@angular/core';
import { posts } from '../../../test/test-posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
 Posts = posts;
}
