import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'form-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-product.component.html',
})
export class FormProductComponent {
  title: string = 'title';
  newProduct: Product = {
    title: '',
    description: '',
    stock: 0,
    price: 0,
  };
  placeholderTitle: string = 'Enter a title';
  valueButton: string = 'Register the product!';
  alertTitle = (): void => {
    this.placeholderTitle = 'Type a title please!!!';
    alert(this.newProduct.title + ' registered!');
    this.newProduct = {
      title: '',
      description: '',
      stock: 0,
      price: 0,
    };
  };
}
