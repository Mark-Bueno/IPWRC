import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RoutingModule} from './routing/routing.module';
import {LoginModule} from './login/login.module';
import {SharedModule} from './shared/shared.module';
import {MatCardModule} from '@angular/material';
import {ProductsModule} from './products/products.module';
import {HttpClientModule} from '@angular/common/http';
import {CartModule} from './cart/cart.module';
import {HomeModule} from './home/home.module';
import {AdminModule} from './admin/admin.module';

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
    AdminModule,
    CartModule,
    HomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
