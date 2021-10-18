import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RoutingModule} from './routing/routing.module';
import {LoginModule} from './login/login.module';
import {SharedModule} from './shared/shared.module';
import {HomeComponent} from './home/home.component';
import {MatCardModule} from '@angular/material';
import {ProductsModule} from './products/products.module';
import { CartComponent } from './cart/cart.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    RoutingModule,
    LoginModule,
    SharedModule,
    MatCardModule,
    ProductsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
