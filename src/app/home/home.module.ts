import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {MatCardModule} from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    RouterModule
  ]
})
export class HomeModule {
}
