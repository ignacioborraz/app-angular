import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormProductComponent } from './components/form-product/form-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
  h1: string = "Product Form"
}
