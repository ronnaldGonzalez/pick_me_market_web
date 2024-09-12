import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProductOffersComponent } from './components/product-offers/product-offers.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderValidationComponent } from './components/order-validation/order-validation.component';
import { ProductControversyComponent } from './components/product-controversy/product-controversy.component';
import { HomeComponent } from './components/home/home.component';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrivateSiteComponent } from './components/private-site/private-site.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerInfoComponent,
    OrderDetailsComponent,
    ProductOffersComponent,
    PaymentComponent,
    OrderValidationComponent,
    ProductControversyComponent,
    HomeComponent,
    LoginModalComponent,
    NavbarComponent,
    PrivateSiteComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
