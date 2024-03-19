import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {

  public idNo: string | null = "";

  constructor(private rout: ActivatedRoute) { }
  ngOnInit(): void {
    // let id =  this.rout.snapshot.paramMap.get
    // this.idNo = id
    console.log(this)
    
  }

}
