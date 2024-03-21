import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-address-details',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './address-details.component.html',
  styleUrl: './address-details.component.css'
})
export class AddressDetailsComponent {
  public topices = ['angular', 'react', 'Vue']
  categary: any
  ngfrom:any
}
