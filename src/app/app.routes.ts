import {Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';


export const ROUTES: Routes = [
   {path: '', component: HomePageComponent},
  // // make sure this one stays on the end
  // {path: '**', component: NotFoundComponent}
];
