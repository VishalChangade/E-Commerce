import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu'
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents=[
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatFormFieldModule
]

@NgModule({
  declarations: [
    

  ],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MeterialModule { }
