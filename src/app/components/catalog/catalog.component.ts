import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  @Input() products !: Product[];

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();
  onAddCart(product: Product){
    this.productEventEmitter.emit(product);
  }
}
