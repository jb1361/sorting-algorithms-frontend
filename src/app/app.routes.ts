import {Routes} from '@angular/router';
import {HomePageComponent} from './modules/pages/home-page/home-page.component';
import {NotFoundComponent} from './modules/util/component/not-found/not-found.component';

export const ROUTES: Routes = [
   {path: '', component: HomePageComponent},
  // // make sure this one stays on the end
   {path: '**', component: NotFoundComponent}
];
