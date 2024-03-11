import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent, LifeCycleComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
  name: string = '';
  ngModelname: string = '';
  message:string="";

  // onClick() {
  //   this.name=this.ngModelname
  //   console.log(this.name);
  // }
}
