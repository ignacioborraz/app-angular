import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'red-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './red-card.component.html',
  styleUrl: './red-card.component.css'
})
export class RedCardComponent {
  @Input({ required: true }) index: number = 0
  @Input({ required: true }) total: number = 0
  @Input({ required: true }) each: Product = {
    _id: '',
    title: '',
    description: '',
    stock: 0,
    price: 0,
    images: [''],
    colors: [''],
    onsale: false,
  }
}
