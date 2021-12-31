import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

const MATERIAL_COMPONENTS = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatGridListModule,
  MatDividerModule,
  MatListModule,
  MatBadgeModule,
  MatIconModule,
  MatRippleModule,
  MatSidenavModule,
]

@NgModule({
  declarations: [],
  imports: [ MATERIAL_COMPONENTS ],
  exports: [ MATERIAL_COMPONENTS ]
})
export class MaterialModule { }
