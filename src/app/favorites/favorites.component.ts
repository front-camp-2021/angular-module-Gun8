import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectWishList} from "../../store/wishlist/wishlist.selectors";
import {changeNumOfPages, changePage} from "../../store/pagination/pagination.actions";
import {Product} from "../../interfaces/product-interface";
import {selectPagination} from "../../store/pagination/pagination.selectors";
import Pagination from "../../interfaces/pagination-interface";
import {Subscription} from "rxjs/internal/Subscription";
import {clearWishList} from "../../store/wishlist/wishlist.actions";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  wishList$ = this.store.select(selectWishList);
  pagination$ = this.store.select(selectPagination);

  wishListSubscription!: Subscription;

  public wishList: ReadonlyArray<Product> = [];
  public pageLimit = 12;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.wishListSubscription = this.wishList$.subscribe(products => this.handleProducts(products));
  }

  ngOnDestroy(){
    this.wishListSubscription.unsubscribe();
  }

  handleProducts(products: ReadonlyArray<Product>){
    this.wishList = products;

    this.changeNumOfPages();
  }

  changePage(num: number){
    this.store.dispatch(changePage({num}))
  }

  changeNumOfPages(){
    const num = Math.ceil(this.wishList.length / this.pageLimit);
    this.store.dispatch(changeNumOfPages({num}));
  }

  getSlicedProducts(pagination: Pagination | null){
    if(!pagination) return [];

    const pageIndex = pagination.currentPage - 1;
    const products = [...this.wishList];

    return products.slice(pageIndex * this.pageLimit, pagination.currentPage * this.pageLimit);
  }

  clearWishList(){
    this.store.dispatch(clearWishList());
  }
}
