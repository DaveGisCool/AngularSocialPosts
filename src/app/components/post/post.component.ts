import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../interfaces/Post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	@Input() post: Post;
	@Output() deleted = new EventEmitter<Post>();

  title: string;
  thought: string;

  constructor() { }

  ngOnInit(): void {
  }

  deletePost() {
		this.deleted.emit(); // deletes 
	}
  
  onDelete() {
    this.deleted.emit(this.post); // deletes
  }
}
