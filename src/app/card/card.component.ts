import {Component, Input, OnInit, OnChanges, Output,EventEmitter} from '@angular/core';
import {Product} from "../../interfaces/product-interface";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() addedToWishList: boolean = false;
  @Input() product!: Product;
  @Output() toggleWishListEvent = new EventEmitter<Product>();
  public bgImage = {
    backgroundImage: ''
  };

  constructor() {}

  ngOnChanges(): void{
    this.bgImage.backgroundImage = `url(${this.product.images[0]})`;
  }

  ngOnInit(): void {
  }

  toggleWishList(){
    this.toggleWishListEvent.emit(this.product);
  }
}
