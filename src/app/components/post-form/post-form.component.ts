import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../interfaces/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  
  @Output() submitted = new EventEmitter<Post>();

  posts: Post[];
  title: string;
  thought: string;

  constructor() {
    this.thought;
    this.title;
   }

  ngOnInit(): void {  
  }

  submitPost() {
    this.submitted.emit({title: this.title, thought: this.thought});
  }

}