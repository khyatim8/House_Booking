import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Account/home.component';
import { AdminComponent } from './admin/admin.component';
import { Home1Component } from './home1/home1.component';
import { HouseregisterComponent } from './houseregister/houseregister.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { PropertyComponent } from './property/property.component';
import { RegisterComponent } from './register/register.component';
import { SseeOrderComponent } from './ssee-order/ssee-order.component';
import { VenderComponent } from './vender/vender.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'account',
    component: HomeComponent
  },
  
  {
    path: 'home1',
    component: Home1Component
  },

  {
    path: 'order',
    component: OrderComponent
  },
  
  {
    path: 'houseregister',
    component: HouseregisterComponent
  },

  {
    path: 'vender',
    component: VenderComponent
  },

  {
    path: 'admin',
    component: AdminComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },


  {
    path: 'property',
    component: PropertyComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'see-order',
    component: SseeOrderComponent
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
