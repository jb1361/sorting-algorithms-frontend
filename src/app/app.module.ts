import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {UtilModule} from './modules/util/util.module';
import {PagesModule} from './modules/pages/pages.module';
import {MaterialModule} from './modules/material/material.module';
import {LayoutModule} from './modules/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    PagesModule,
    UtilModule,
    MaterialModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
