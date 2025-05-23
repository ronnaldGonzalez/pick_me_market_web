import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from '../core/services/auth.guard';
import { CarritoComponent } from './components/carrito/carrito.component';
import { OrderStatusComponent } from './pages/order-status/order-status.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ClientInformationFormComponent } from './pages/client-information-form/client-information-form.component';
import { CarInformationFormComponent } from './pages/car-information-form/car-information-form.component';
import { SparePartInformationFormComponent } from './pages/spare-part-information-form/spare-part-information-form.component';
import { ClientOrderDetailComponent } from './pages/client-order-detail/client-order-detail.component';
import { OfferUploadComponent } from './pages/offer-upload/offer-upload.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'clientInformation',
    component: ClientInformationFormComponent
  },
  {
    path: 'carInformation',
    component: CarInformationFormComponent
  },
  {
    path: 'sparePartInformation',
    component: SparePartInformationFormComponent
  },
  { 
    path: 'estadoSolicitud/:id',
    component: OrderStatusComponent,
    // canActivate: [AuthGuard] 
  },
  { 
    path: 'clientOrderDetail',
    component: ClientOrderDetailComponent,
    // canActivate: [AuthGuard] 
  },
  {
    path: 'creacionOferta/:id/:proveedor',
    component: OrderStatusComponent
  },
  {
    path: 'proveedorOrderDetail',
    component: OfferUploadComponent
  },
  { path: '**', redirectTo: '' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

