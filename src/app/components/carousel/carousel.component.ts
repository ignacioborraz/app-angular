import { Component, effect, signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  constructor(private service: ProductsService) {
    const start = Date.now();
    while (Date.now() - start < 5000) {}
    effect(()=>{
      this.product = this.service.readOne(this.slide());
      //console.log(this.slide());
    })
  }
  slide = signal(0);
  product: Product = this.service.readOne(this.slide());
  next() {
    this.slide.update((val) => val + 1);
    //console.log(this.slide());
  }
  first() {
    this.slide.set(0)
  }
}
