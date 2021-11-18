import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Product} from "../../interfaces/product-interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() product!: Product;
  public bgImage = {
    backgroundImage: ''
  };

  constructor() { }

  ngOnChanges(): void{
    this.bgImage.backgroundImage = `url(${this.product.images[0]})`;
  }

  ngOnInit(): void {
  }

}
