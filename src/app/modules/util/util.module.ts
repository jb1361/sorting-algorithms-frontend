import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {HeaderComponent} from './component/header/header.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [HeaderComponent, NotFoundComponent],
  exports: [HeaderComponent]
})
export class UtilModule { }
