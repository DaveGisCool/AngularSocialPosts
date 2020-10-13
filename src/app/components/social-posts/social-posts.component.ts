import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../interfaces/Post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  @Input() post: Post;
  @Output() deleted = new EventEmitter<Post>();
  @Output() submitted = new EventEmitter<Post>();

  posts: Post[];
  title: string;
  thought: string;

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
      title: 'First entry',
      thought: 'Well... I started.'
      },
      {
      title: 'Second entry?',
      thought: 'I already forgot I started this thing.'
    }
    ]
  }

  onSubmit(post: Post) {
    this.submitted.emit({title: this.title, thought: this.thought});
  }

  onDelete(post: Post) {
    this.deleted.emit(this.post); // deletes 
  }
}