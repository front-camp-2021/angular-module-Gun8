import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Product} from '../../interfaces/product-interface';
import {Store} from "@ngrx/store";
import {selectWishList} from "../../store/wishlist/wishlist.selectors";
import {addToWishList, removeFromWishList} from "../../store/wishlist/wishlist.actions";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnChanges {
  wishList$ = this.store.select(selectWishList);
  public wishList: ReadonlyArray<Product> = [];

  @Input() products!: ReadonlyArray<Product> | null;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.wishList$.subscribe(data => this.wishList = data);
  }

  ngOnChanges(){
  }

  toggleWishList(product: Product){
    if(this.wishList.findIndex(item => item.id === product.id) > -1) {
      this.store.dispatch(removeFromWishList({product}));
    }
    else{
      this.store.dispatch(addToWishList({product}));
    }
  }

  isAddedToWishList(item: Product){
    return this.wishList.findIndex(product => product.id === item.id) > -1
  }
}
