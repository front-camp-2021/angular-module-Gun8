import { Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import { Store } from '@ngrx/store';
import {retrievedProducts} from "../store/products/products.actions";
import {selectProducts} from "../store/products/products.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  products$ = this.store.select(selectProducts);

  constructor(private service: AppService, private store: Store) {}

  ngOnInit(){
    this.service
      .getProducts()
      .subscribe(products => this.store.dispatch(retrievedProducts({products})))
  }

}
