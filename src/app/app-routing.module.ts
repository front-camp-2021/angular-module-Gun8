import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {FavoritesComponent} from "./favorites/favorites.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path: "", redirectTo: '/products', pathMatch: 'full' },
  {path:"products", component: ProductsComponent},
  {path:'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
