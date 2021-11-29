import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { CardComponent } from './products/card/card.component';
import { PaginatorComponent } from './products/paginator/paginator.component';
import { ProductsComponent } from './products/products.component';
import { ItemCardComponent } from './shopping-cart/item-card/item-card.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LogoComponent,
    HeaderComponent,
    ProductsComponent,
    ProductOverviewComponent,
    CardComponent,
    PaginatorComponent,
    ShoppingCartComponent,
    ItemCardComponent,
    FooterComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    HttpClientModule,
    MatPaginatorModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatSidenavModule   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
