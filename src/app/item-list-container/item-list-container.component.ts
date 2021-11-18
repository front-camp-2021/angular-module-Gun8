import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {Product} from "../../interfaces/product-interface";
import Pagination from "../../interfaces/pagination-interface";

@Component({
  selector: 'app-item-list-container',
  templateUrl: './item-list-container.component.html',
  styleUrls: ['./item-list-container.component.scss']
})

export class ItemListContainerComponent implements OnInit {
  @Input() pagination!: Pagination;
  @Input() products: Product[] = [];
  public pageLimit = 12;

  constructor() {}

  ngOnInit(): void {
  }

  getSlicedProducts(){
    const pageIndex = this.pagination.currentPage - 1;
    const products = [...this.products];

    return products.slice(pageIndex * this.pageLimit, this.pagination.currentPage * this.pageLimit);
  }

}
