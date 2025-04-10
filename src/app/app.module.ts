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
import { RepuestosFormComponent } from './components/repuestos-form/repuestos-form.component';
import { RepuestosListComponent } from './components/repuestos-list/repuestos-list.component';
import { OrdenComponent } from './pages/orden/orden.component';
import { NavigationLayoutComponentComponent } from './pages/navigation-layout-component/navigation-layout-component.component';
import { ApiService } from './services/api.service';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { MenuOfertaComponent} from './components/menu-oferta/menu-oferta.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CarritoIconComponent } from './components/carrito-icon/carrito-icon.component';
import { OrderSuccessModalComponent } from './components/modals/order-success-modal/order-success-modal.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { OrderStatusComponent } from './pages/order-status/order-status.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarFormComponent } from './components/sidebar-form/sidebar-form.component';
import { ClientInformationFormComponent } from './pages/client-information-form/client-information-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginModalComponent,
    NavbarComponent,
    PrivateSiteComponent,
    VehicleInfoComponent,
    RepuestosFormComponent,
    RepuestosListComponent,
    OrdenComponent,
    NavigationLayoutComponentComponent,
    OrderDetailComponent,
    MenuOfertaComponent,
    CarritoComponent,
    CarritoIconComponent,
    OrderSuccessModalComponent,
    ClientInfoComponent,
    OrderStatusComponent,
    SpinnerComponent,
    LoginPageComponent,
    HowItWorksComponent,
    FooterComponent,
    SidebarFormComponent,
    ClientInformationFormComponent
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
