import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-like',
  templateUrl: 'like.component.html',
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
