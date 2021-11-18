import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
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
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
