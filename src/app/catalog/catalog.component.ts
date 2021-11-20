import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Pagination from '../../interfaces/pagination-interface';
import {Product} from "../../interfaces/product-interface";
import {FilteredBy} from "../../interfaces/filtered-by-interface";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @Input() pagination!: Pagination;
  @Input() filteredProducts!: Product[];
  @Input() filteredBy!: FilteredBy;

  @Output() changeFilteredBy = new EventEmitter<FilteredBy>();

  constructor() { }

  ngOnInit(): void {
  }

  handleFilterChanges(event: FilteredBy){
    this.changeFilteredBy.emit(event);
  }

}
