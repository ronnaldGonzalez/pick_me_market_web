import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductOffersComponent } from './product-offers/product-offers.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderValidationComponent } from './order-validation/order-validation.component';
import { ProductControversyComponent } from './product-controversy/product-controversy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerInfoComponent,
    OrderDetailsComponent,
    ProductOffersComponent,
    PaymentComponent,
    OrderValidationComponent,
    ProductControversyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
