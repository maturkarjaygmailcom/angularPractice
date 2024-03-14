import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { outputAst } from '@angular/compiler';
@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnChanges {

  @Input() public no: number = 0;
  @Output() public newEvent11 = new EventEmitter();
  c: number = 0;
  public color: string = "red";
  data: number[] = [1, 2, 3, 4];

  ngOnChanges(changes: SimpleChanges): void {
    //   this.count = 0;
    console.log(this.no)
  }

  ClickMe() {
    this.c = this.c + 1;
    this.newEvent11.emit(this.c)
    console.log(this.c)
  }




}
