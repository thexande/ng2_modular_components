import { Component, OnInit } from '@angular/core';
import { VoteComponent } from '../vote/vote.component'

@Component({
  moduleId: module.id,
  selector: 'app-feed',
  directives: [VoteComponent],
  // templateUrl: 'feed.component.html',
  template: `
  <div class="row col-md-10" *ngFor="let post of feed">
  <app-vote class="col-md-1"></app-vote>

  <div class="media col-md-8">

  <a class="media-left" href="#">
    <img class="media-object" src="{{ post.image }}" alt="Generic placeholder image">
  </a>
  <div class="media-body">
    <h4 class="media-heading">{{ post.feed_title }}</h4>
    {{ post.feed_content }}
    {{ post.feed_user }}
    </div>
  </div>
  </div>`,
  styles: [`
    img{
      width: 65px;
      height: 65px;
    }
  `]
  // styleUrls: ['feed.component.css']
})
export class FeedComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  feed = [
    {
      image: 'http://www.zerohedge.com/sites/default/files/images/user230519/imageroot/Trump_2.jpg',
      feed_title: 'TRUMP STEAKS',
      feed_content: 'TRUMP STEAKS ARE MADE FROM THE BEST FEEF',
      feed_user: '@theDuke',
      vote_count: 3
    },
    {
      image: 'http://www.gannett-cdn.com/-mm-/9065941e142eb769bb76794c742e08d1e14ee558/r=300/http/www.gannett-cdn.com/-mm-/9065941e142eb769bb76794c742e08d1e14ee558/r=300/http/www.gannett-cdn.com/-mm-/fa6b5bd20ee387f5c0e2b7f460dd0c3e0f76d982/c=188-0-2563-2375/local/-/media/2016/04/14/USATODAY/USATODAY/635962443213358215-AP-Russia-Putin.jpg',
      feed_title: '"We will only take crimea"',
      feed_content: 'Brave new world, peace in our time, etc.',
      feed_user: '@mrPutin',
      vote_count: 4
    },
    {
      image: 'https://tribwpix.files.wordpress.com/2014/04/ultimate-warrior-wrestling-hall-of-fame.jpeg?quality=85&strip=all',
      feed_title: 'The warrior',
      feed_content: '"THE CREAM WILL ALWAYS RISE TO THE TOP"',
      feed_user: '@warrior',
      vote_count: 5
    },
  ]


}
