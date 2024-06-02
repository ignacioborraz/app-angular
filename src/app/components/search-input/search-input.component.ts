import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  search: string = '';
  @Output() salida = new EventEmitter<string>();
  onKeyUp() {
    console.log(this.search);
    this.salida.emit(this.search);
  }
}
