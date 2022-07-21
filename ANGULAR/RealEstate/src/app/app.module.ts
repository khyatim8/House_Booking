import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './Account/home.component';
import { AdminComponent } from './admin/admin.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home1Component } from './home1/home1.component';
import { HouseregisterComponent } from './houseregister/houseregister.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { PropertyComponent } from './property/property.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { FilterPipe } from './shared/filter.pipe';
import { SseeOrderComponent } from './ssee-order/ssee-order.component';
import { VenderComponent } from './vender/vender.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PropertyComponent,
    OrderComponent,
    Home1Component,
    HouseregisterComponent,
    VenderComponent,
    AdminComponent,
    FilterPipe,
    SseeOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
