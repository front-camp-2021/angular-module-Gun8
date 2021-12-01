import { Component, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product-interface";
import {FilteredBy} from "../../interfaces/filtered-by-interface";
import {Store} from "@ngrx/store";
import {selectProducts} from "../../store/products/products.selectors";
import {selectPagination} from "../../store/pagination/pagination.selectors";
import {changeNumOfPages, changePage} from "../../store/pagination/pagination.actions";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit {
  products$ = this.store.select(selectProducts);
  pagination$ = this.store.select(selectPagination);

  public products: Product[] = [];
  public filteredProducts: Product[] = [];
  public pageLimit = 12;

  public filteredBy: FilteredBy = {
    filters: [],
    sliders: [],
    search: []
  };

  constructor(private store: Store) {}

  ngOnInit(){
    this.products$
      .subscribe(products => this.handleProducts(products));
  }

  handleProducts(products:  ReadonlyArray<Product>){
    this.products = this.filteredProducts = [...products];

    this.filteredBy = {
      filters: [...products],
      sliders: [...products],
      search: [...products]
    };

    this.changeNumOfPages();
  }

  changePage(num: number){
    this.store.dispatch(changePage({num}))
  }

  changeNumOfPages() {
    const num = Math.ceil(this.filteredProducts.length / this.pageLimit);
    this.store.dispatch(changeNumOfPages({num}));
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
