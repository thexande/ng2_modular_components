import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-vote',
  template: `
  <div class="votecontainer">
    <div class="row"><i class="glyphicon glyphicon-chevron-up" (click)="upVote()" [class.vote]="isUpVote"></i></div>
    <div class="row votecount">{{ totalVotes }}</div>
    <div class="row"><i class="glyphicon glyphicon-chevron-down" (click)="downVote()" [class.vote]="isDownVote"></i></div>
    </div>
  `,

  styles: [`.glyphicon {
              font-size: 2em;
          }
            .vote {
              color: gold;
            }
            .votecount{
              text-align:center;
            }
            .votecontainer{
              width: 0vw;
            }
          `]
  // templateUrl: 'vote.component.html',
  // styleUrls: ['vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() userVote = false
  @Input() isUpVote = false
  @Input() isDownVote = false
  @Output() totalVotes = 3

  constructor() { }
  ngOnInit() { }
  upVote(){
    if(!this.userVote){
      this.userVote = true
      this.isUpVote = true
      ++this.totalVotes

    } else { return }
  }
  downVote(){
    if(!this.userVote){
      this.userVote = true
      this.isDownVote = true
      --this.totalVotes
    } else { return }
  }
}
