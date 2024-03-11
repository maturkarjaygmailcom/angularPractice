import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnChanges {

  @Input() dataPasing: string = "";
  @Output() public newEvent = new EventEmitter()

  data: string = ""
  hideData: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.data = this.dataPasing;
    this.newEvent.emit(this.hideData)
  }



}
