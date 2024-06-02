import { Component, OnInit } from '@angular/core';
import { products } from '../../../assets/products';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { RedCardComponent } from '../../components/red-card/red-card.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterModule, RedCardComponent, SearchInputComponent],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  onsale = false;
  price = 'asc';
  all: Array<Product> = products
  filteredProducts: Array<Product> = [];
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queries) => {
      this.onsale = queries.get('onsale') === 'true' ? true : false;
      this.price = queries.get('price') || 'asc';
    });
    console.log("ONSALE: "+this.onsale);
    console.log("PRICE: "+this.price);
    this.filteredProducts = products
      .filter((each) => each.onsale === this.onsale)
      .sort((a, b) =>
        this.price === 'asc' ? a.price - b.price : b.price - a.price
      );
    console.log(this.filteredProducts);
  }
  queHagoConLaRecepcion(search: string) {
    if(search) {
      this.all = products.filter(each=> each.title.toLowerCase().includes(search.toLowerCase()))
    }
  }
}
