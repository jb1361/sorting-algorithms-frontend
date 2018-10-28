import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './component/header/header.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class LayoutModule { }
