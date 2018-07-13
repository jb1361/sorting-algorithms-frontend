import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import {UtilModule} from '../util/util.module';

@NgModule({
  imports: [
    CommonModule,
    UtilModule
  ],
  declarations: [HomePageComponent]
})
export class PagesModule { }
