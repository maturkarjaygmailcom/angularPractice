import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  public name: string = "";
  // @Input() userNamePassing = ""
}
