import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sub-component1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-component1.component.html',
  styleUrl: './sub-component1.component.css'
})
export class SubComponent1Component {
  @Input() userName: string = ""
  citys: string[] = ["surat", "navasri", "valsad", "dadar", "New Delhi"]
  states: string[] = ["gujarat", "Maharashtra", "delhi"]


}
