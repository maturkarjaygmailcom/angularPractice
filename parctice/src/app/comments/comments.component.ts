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
 
  

  data: string = ""
  hideData: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    this.data = this.dataPasing;
    // console.log(this.dataPasing)
    // console.log(this.dataUserName)
    // this.newEvent.emit(this.hideData)

  }



}
