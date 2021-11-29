import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home',component: ProductsComponent},
  {path: 'product-overview/:id', component: ProductOverviewComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
