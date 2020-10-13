import { Component } from '@angular/core';
import { Post } from '../app/interfaces/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialPosts';
  isHidden = true;

  doHidden() {
    this.isHidden = !this.isHidden;
  }
}
