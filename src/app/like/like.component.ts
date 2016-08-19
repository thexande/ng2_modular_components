import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-like',
  // templateUrl: 'like.component.html',
  template: `
  <i class="glyphicon"
   [class.glyphicon-thumbs-up] = "!isLike"
   [class.glyphicon-thumbs-down] = "isLike"
   (click) = "onClick()"
  ></i>`,
  // styles: [``]
  styleUrls: ['like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() isLike = false
  @Output() change = new EventEmitter()

  constructor() { }
  ngOnInit() { }
  onClick() {
    this.isLike = !this.isLike
    this.change.emit({ newValue: this.isLike })
  }

}
