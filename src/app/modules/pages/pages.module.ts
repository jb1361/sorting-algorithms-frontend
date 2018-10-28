import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import {UtilModule} from '../util/util.module';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    UtilModule,
    LayoutModule
  ],
  declarations: [HomePageComponent, AlgorithmsComponent]
})
export class PagesModule { }
