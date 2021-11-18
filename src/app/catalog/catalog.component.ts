import {Component, Input, OnInit} from '@angular/core';
import Pagination from '../../interfaces/pagination-interface';
import {Product} from "../../interfaces/product-interface";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @Input() pagination!: Pagination;
  @Input() products!: Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
