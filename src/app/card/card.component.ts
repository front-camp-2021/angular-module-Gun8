import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {Product} from "../../interfaces/product-interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input() product!: Product;
  public bgImage = {
    backgroundImage: ''
  };



  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.bgImage.backgroundImage = `url(${this.product.images[0]})`;
  }

}
