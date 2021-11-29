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
import {HttpClientModule} from '@angular/common/http';
import {CartModule} from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    RoutingModule,
    LoginModule,
    SharedModule,
    MatCardModule,
    ProductsModule,
    HttpClientModule,
    CartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
