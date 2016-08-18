import { Component } from '@angular/core';
import { LikeComponent } from './like/like.component'
import { VoteComponent } from './vote/vote.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[LikeComponent, VoteComponent]
})
export class AppComponent {
  title = 'Modular Angular 2 Components';
  onLikeChange($event) {
    console.log($event);
  }
}
