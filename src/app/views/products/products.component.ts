import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { RedCardComponent } from '../../components/red-card/red-card.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, RedCardComponent, SearchInputComponent],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  onsale = false;
  price = 'asc';
  all: Array<Product> = this.service.readAll(true, 'asc', '');
  filteredProducts: Array<Product> = [];
  constructor(
    private route: ActivatedRoute,
    private service: ProductsService
  ) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queries) => {
      this.onsale = queries.get('onsale') === 'true' ? true : false;
      this.price = queries.get('price') || 'asc';
    });
    console.log('ONSALE: ' + this.onsale);
    console.log('PRICE: ' + this.price);
    this.filteredProducts = this.service.readAll(this.onsale, this.price, '');
    console.log(this.filteredProducts);
  }
  queHagoConLaRecepcion(search: string) {
    if (search) {
      this.all = this.service.readAll(this.onsale, this.price, search);
    }
  }
}
