import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [NotFoundComponent],
  exports: []
})
export class UtilModule { }
