import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrdenComponent } from './pages/orden/orden.component';
import {  OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { AuthGuard } from '../core/services/auth.guard';
import { NavigationLayoutComponentComponent } from './pages/navigation-layout-component/navigation-layout-component.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { OrderStatusComponent } from './pages/order-status/order-status.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { ClientInformationFormComponent } from './pages/client-information-form/client-information-form.component';
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
    path: 'howItWorks',
    component: HowItWorksComponent
  },
  {
    path: 'clientInformation',
    component: ClientInformationFormComponent
  },
  { 
    path: 'estadoSolicitud/:id',
    component: OrderStatusComponent,
    // canActivate: [AuthGuard] 
  },
  {
    path: 'navigatonLayout',
    component: NavigationLayoutComponentComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'createOrder',
        component: OrdenComponent
      },
      {
        path: 'orderDetail',
        component: OrderDetailComponent
      },
      {
        path: 'carrito',
        component: CarritoComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

