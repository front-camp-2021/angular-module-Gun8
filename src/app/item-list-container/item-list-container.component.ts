import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../interfaces/product-interface";
import Pagination from "../../interfaces/pagination-interface";
import {FilteredBy} from "../../interfaces/filtered-by-interface";

@Component({
  selector: 'app-item-list-container',
  templateUrl: './item-list-container.component.html',
  styleUrls: ['./item-list-container.component.scss']
})

export class ItemListContainerComponent implements OnInit {
  @Input() pagination!: Pagination;
  @Input() filteredProducts: Product[] = [];
  @Input() filteredBy!: FilteredBy;
  @Output() changeFilteredBy = new EventEmitter<FilteredBy>();

  constructor() {}

  ngOnInit(): void {
  }

  getSlicedProducts(){
    const pageIndex = this.pagination.currentPage - 1;
    const products = [...this.filteredProducts];

    return products.slice(pageIndex * this.pagination.pageLimit, this.pagination.currentPage * this.pagination.pageLimit);
  }

  handleFilterChanges(event: FilteredBy){
    this.changeFilteredBy.emit({...event});
  }

}
