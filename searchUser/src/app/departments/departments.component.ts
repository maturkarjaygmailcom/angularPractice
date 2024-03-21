import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent implements OnInit {
  constructor(private arouter: ActivatedRoute, private router: Router) { }
  deptId: any
  ngOnInit(): void {
    this.arouter.paramMap.subscribe((param: ParamMap) => {
      let id = (param.get('id'))                                  //paramMap
      this.deptId = (id)
    })

  }

  goPrevious() {
    let previousId = parseInt(this.deptId) - 1;
    this.router.navigate(['/dept', previousId])
  }
  goNext() {
    let nextId = parseInt(this.deptId) + 1;
    this.router.navigate(['/dept', nextId])
  }
  gotoBack() {       //optinal param
    let selectedId = this.deptId ? this.deptId : null
    this.router.navigate(['/home', { id: selectedId }])
    // this.router.navigate(['../', { id: selectedId }], { relativeTo: this.arouter })
  }

  showOverview() {
    this.router.navigate(['overview'],{relativeTo:this.arouter})
  }
  showContact() {
    this.router.navigate(['contect'],{relativeTo:this.arouter})
  }
}

