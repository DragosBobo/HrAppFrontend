import { Component, Input } from '@angular/core';
import { posts } from '../../../test/test-posts';
import { User } from '../../../_models/user';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
 Posts = posts;
 @Input() user?: User;

}
