import { Component, OnInit } from '@angular/core';
import {products} from './products';

@Component({
  selector: 'app-item-list-container',
  templateUrl: './item-list-container.component.html',
  styleUrls: ['./item-list-container.component.scss']
})
export class ItemListContainerComponent implements OnInit {
  public products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
