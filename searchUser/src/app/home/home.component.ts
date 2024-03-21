import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public departments = [
    { "id": 1, "name": " node" },
    { "id": 2, "name": " js" },
    { "id": 3, "name": " html" },
    { "id": 4, "name": " c" }
  ]
  selectedId: any;

  constructor(private route: Router, private router: ActivatedRoute) {

  }
  onSelect(deptId: any) {
    this.route.navigate(['/dept', deptId])
    // this.route.navigate([deptId],{relativeTo:this.router})  //relative routing
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id')
      this.selectedId = id

    })
  }

  isSelected(deptId: any) {
    return parseInt(this.selectedId) == deptId
  }

}
