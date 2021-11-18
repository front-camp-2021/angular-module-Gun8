import { Component, OnInit } from '@angular/core';
import {Product} from "../interfaces/product-interface";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public products: Product[] = [];
  public pagination = {
    currentPage: 1,
    totalPages: 10,
    pageLimit: 12
  };

  constructor(private service : AppService) {}

  ngOnInit(){
    this.service.getProducts()
      .subscribe(data => this.handleProducts(data));

  }

  handleProducts(data: Product[]){
    this.products = data;
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
      totalPages: Math.ceil(this.products.length / this.pagination.pageLimit)
    };
  }
}
