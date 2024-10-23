import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivateSiteComponent} from './pages/private-site/private-site.component';
import { OrdenComponent } from './pages/orden/orden.component';
import {  OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { AuthGuard } from '../core/services/auth.guard';
import { NavigationLayoutComponentComponent } from './pages/navigation-layout-component/navigation-layout-component.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'privateSite',
    component: PrivateSiteComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'createOrder',
        component: OrdenComponent
      }
    ]
  },
  {
    path: 'navigatonLayout',
    component: NavigationLayoutComponentComponent,
    children: [
      {
        path: 'createOrder',
        component: OrdenComponent
      },
      {
        path: 'orderDetail',
        component: OrderDetailComponent
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

