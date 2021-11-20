import { Component, OnInit, OnChanges } from '@angular/core';
import {Product} from "../interfaces/product-interface";
import {AppService} from "./app.service";
import {FilteredBy} from "../interfaces/filtered-by-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{
  public products: Product[] = [];
  public filteredProducts: Product[] = [];
  public pagination = {
    currentPage: 1,
    totalPages: 10,
    pageLimit: 12
  };

  public filteredBy: FilteredBy = {
    filters: [],
    sliders: [],
    search: []
  };

  constructor(private service : AppService) {}

  ngOnChanges(){
    console.log(this.filteredBy);
  }

  ngOnInit(){
    this.service.getProducts()
      .subscribe(data => this.handleProducts(data));

  }

  handleProducts(data: Product[]){
    this.products = this.filteredProducts = data;

    this.filteredBy = {
      filters: this.products,
      sliders: this.products,
      search: this.products
    };

    this.changeNumOfPages();
  }

  changePage(num: number){
    this.pagination = {
      ...this.pagination,
      currentPage: num
    }
  }

  changeNumOfPages(){
    this.pagination = {
      ...this.pagination,
      totalPages: Math.ceil(this.filteredProducts.length / this.pagination.pageLimit),
      currentPage: 1
    };
  }

  handleFilterChanges(event: FilteredBy){
    this.filteredBy = {
      ...event
    };

    this.filteredProducts = this.products.filter(product =>
      this.getProductsIdArray(this.filteredBy.filters).includes(product.id) &&
      this.getProductsIdArray(this.filteredBy.sliders).includes(product.id) &&
      this.getProductsIdArray(this.filteredBy.search).includes(product.id)
    );

    this.changeNumOfPages();
  }

  getProductsIdArray(products: Product[]){
    return products.map(product => product.id);
  }
}
