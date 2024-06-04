import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'form-product',
  standalone: true,
  imports: [FormsModule],
templateUrl: './form-product.component.html',
})
export class FormProductComponent {
  constructor(private service: ProductsService) {}
  title: string = 'title';
  newProduct: Product = {
    _id: '',
    title: '',
    description: '',
    stock: 0,
    price: 0,
    images: [''],
    colors: [''],
    onsale: false,
  };
  placeholderTitle: string = 'Enter a title';
  valueButton: string = 'Register the product!';
  create = (): void => {
    //console.log(this.newProduct);
    const response = this.service.create(this.newProduct)
    if (response) {
      this.newProduct = {
        _id: '',
        title: '',
        description: '',
        stock: 0,
        price: 0,
        images: [''],
        colors: [''],
        onsale: false,
      };
      alert("Producto agregado!")
    } else {
      alert("Faltan Datos o ERROR")
    }
  };
}
