import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrivateSiteComponent} from './components/private-site/private-site.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { AuthGuard } from '../core/services/auth.guard';

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
        path: 'orderForm',
        component: OrderFormComponent
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

