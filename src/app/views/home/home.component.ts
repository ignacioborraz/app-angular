import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { PlaceholderingComponent } from '../../components/placeholdering/placeholdering.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, PlaceholderingComponent, LoadingComponent],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
