
import { ProductsComponent } from './products.component';

import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListPaginatorComponent } from './product-list-paginator/product-list-paginator.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductListPaginatorComponent,
    ProductOverviewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ProductsComponent,
    ProductOverviewComponent,
  ]
})
export class ProductsModule { }
