import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {ProductsComponent} from '../products/products.component';
import {ProductInformationComponent} from '../products/product-information/product-information.component';
import {CartComponent} from '../cart/cart.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SharedModule} from '../shared/shared.module';
import {MatCardModule} from '@angular/material';
import {AuthenticationGuard} from './authentication-guard';
import {SignupComponent} from '../login/signup/signup.component';
import {ProductAddComponent} from '../admin/product-add/product-add.component';
import {ProductEditComponent} from "../admin/product-edit/product-edit.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard]},
  {path: 'products', component: ProductsComponent, canActivate: [AuthenticationGuard]},
  {path: 'products/:id', component: ProductInformationComponent, canActivate: [AuthenticationGuard]},
  {path: 'cart', component: CartComponent, canActivate: [AuthenticationGuard]},
  {
    path: 'admin/products/add',
    component: ProductAddComponent,
    canActivate: [AuthenticationGuard],
    data: {role: 'admin'}
  },
  {
    path: 'admin/products/:id',
    component: ProductEditComponent,
    canActivate: [AuthenticationGuard],
    data: {role: 'admin'}
  },
  {path: '404', component: NotFoundComponent, canActivate: [AuthenticationGuard]},
  {path: '**', redirectTo: '/404', canActivate: [AuthenticationGuard]},
];

@NgModule({
  declarations: [
    NotFoundComponent],
  imports: [RouterModule.forRoot(routes), SharedModule, MatCardModule],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class RoutingModule {
}
