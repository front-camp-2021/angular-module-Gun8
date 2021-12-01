import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import {productsReducer} from "../store/products/products.reducer";
import {wishListReducer} from "../store/wishlist/wishlist.reducer";
import {paginationReducer} from "../store/pagination/pagination.reducer";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FiltersListComponent } from './filters-list/filters-list.component';
import { FiltersListItemComponent } from './filters-list-item/filters-list-item.component';
import { DoubleSliderComponent } from './double-slider/double-slider.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemListContainerComponent } from './item-list-container/item-list-container.component';
import { ItemListHeaderComponent } from './item-list-header/item-list-header.component';
import { SearchComponent } from './search/search.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { PaginationComponent } from './pagination/pagination.component';

import {AppService} from "./app.service";
import { AppRoutingModule } from './app-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    FiltersListComponent,
    FiltersListItemComponent,
    DoubleSliderComponent,
    CatalogComponent,
    ItemListContainerComponent,
    ItemListHeaderComponent,
    SearchComponent,
    CardListComponent,
    CardComponent,
    PaginationComponent,
    FavoritesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      products: productsReducer,
      wishList: wishListReducer,
      pagination: paginationReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
