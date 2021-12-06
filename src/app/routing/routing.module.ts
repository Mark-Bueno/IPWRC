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

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductInformationComponent},
  {path: 'cart', component: CartComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  declarations: [
    NotFoundComponent],
  imports: [RouterModule.forRoot(routes), SharedModule, MatCardModule],
  exports: [RouterModule]
})
export class RoutingModule {
}
