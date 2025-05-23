import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrivateSiteComponent } from './pages/private-site/private-site.component';
import { VehicleInfoComponent } from './components/vehicle-info/vehicle-info.component';
import { SparePartFormComponent } from './components/spare-part-form/spare-part-form.component';
import { SparePartListComponent } from './components/spare-part-list/spare-part-list.component';
import { ApiService } from './services/api.service';
import { MenuOfertaComponent} from './components/menu-oferta/menu-oferta.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CarritoIconComponent } from './components/carrito-icon/carrito-icon.component';
import { OrderSuccessModalComponent } from './components/modals/order-success-modal/order-success-modal.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { OrderStatusComponent } from './pages/order-status/order-status.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarFormComponent } from './components/sidebar-form/sidebar-form.component';
import { ClientInformationFormComponent } from './pages/client-information-form/client-information-form.component';
import { CarInformationFormComponent } from './pages/car-information-form/car-information-form.component';
import { SparePartInformationFormComponent } from './pages/spare-part-information-form/spare-part-information-form.component';
import { ClientOrderDetailComponent } from './pages/client-order-detail/client-order-detail.component';
import { OfferUploadComponent } from './pages/offer-upload/offer-upload.component';
import { HowNeedComponent } from './components/how-need/how-need.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginModalComponent,
    NavbarComponent,
    PrivateSiteComponent,
    VehicleInfoComponent,
    SparePartFormComponent,
    SparePartListComponent,
    MenuOfertaComponent,
    CarritoComponent,
    CarritoIconComponent,
    OrderSuccessModalComponent,
    ClientInfoComponent,
    OrderStatusComponent,
    SpinnerComponent,
    LoginPageComponent,
    FooterComponent,
    SidebarFormComponent,
    ClientInformationFormComponent,
    CarInformationFormComponent,
    SparePartInformationFormComponent,
    ClientOrderDetailComponent,
    OfferUploadComponent,
    HowNeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
