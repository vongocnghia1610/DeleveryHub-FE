import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DichvuvanchuyenComponent } from './dichvuvanchuyen/dichvuvanchuyen.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { OrderComponent } from './order/order.component';
import {DangkidoanhnghiepvanchuyenComponent} from './dangkidoanhnghiepvanchuyen/dangkidoanhnghiepvanchuyen.component';
import {AdminComponent} from './admin/admin.component';
import {QuanlidoanhnghiepComponent} from './quanli_doanhnghiep/quanli_doanhnghiep.component';
import { from } from 'rxjs/observable/from';

import { ProfileDoanhnghiepComponent } from './profile-doanhnghiep/profile-doanhnghiep.component';
import { DichvukhachhangComponent } from './dichvukhachhang/dichvukhachhang.component';
import { DichvudoanhnghiepComponent } from './dichvudoanhnghiep/dichvudoanhnghiep.component';
import {AuthServiceService} from './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RegisterComponent,
    LoginComponent,
    DichvuvanchuyenComponent,
    HomeComponent,
    ProfileComponent,
    NotificationComponent,
    OrderComponent,
    AdminComponent,
    QuanlidoanhnghiepComponent,
    DangkidoanhnghiepvanchuyenComponent,
  
    ProfileDoanhnghiepComponent,
  
    DichvukhachhangComponent,
  
    DichvudoanhnghiepComponent,
  

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: RegisterComponent },
      { path: 'dichvukhachhang', component: DichvukhachhangComponent },
      { path: 'dichvuvanchuyen', component: DichvuvanchuyenComponent },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
     
      { path: 'dichvudoanhnghiep', component: DichvudoanhnghiepComponent },
      
      { path: 'notification', component: NotificationComponent },
      
      { path: 'profile', component: ProfileComponent },
      { path: 'profile-doanhnghiep', component: ProfileDoanhnghiepComponent },
      { path: 'order', component: OrderComponent },
      {path:'admin', component:AdminComponent},
      {path:'quanli_doanh_nghiep', component:QuanlidoanhnghiepComponent},
      {path:'dangkidoanhnghiepvanchuyen', component:DangkidoanhnghiepvanchuyenComponent},


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
