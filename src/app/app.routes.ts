import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent}
  //{path: '', redirectTo: 'login', pathMatch: 'full'},

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true});