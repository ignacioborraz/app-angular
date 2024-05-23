import { Component, OnInit } from '@angular/core';
import { products } from '../../../assets/products';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  onsale = false;
  price = 'asc';
  filteredProducts: Array<Product> = [];
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queries) => {
      this.onsale = queries.get('onsale') === 'true' ? true : false;
      this.price = queries.get('price') || 'asc';
      //console.log("ONSALE: "+this.onsale);
      //console.log("PRICE: "+this.price);
    });
    this.filteredProducts = products
      .filter((each) => each.onsale === this.onsale)
      .sort((a, b) =>
        this.price === 'asc' ? a.price - b.price : b.price - a.price
      );
    //console.log(this.filteredProducts);
  }
}
