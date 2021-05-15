import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { ChangepasswordComponent } from './changepassword/changepassword.component';

import { TaogoidoanhnghiepadminComponent } from './taogoidoanhnghiepadmin/taogoidoanhnghiepadmin.component';
import { TaogoikhachhangComponent } from './taogoikhachhang/taogoikhachhang.component';
import { CapnhatgoidoanhnghiepComponent } from './capnhatgoidoanhnghiep/capnhatgoidoanhnghiep.component';
import { CapnhatgoikhachhangComponent } from './capnhatgoikhachhang/capnhatgoikhachhang.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ShowgoidoanhnghiepComponent } from './showgoidoanhnghiep/showgoidoanhnghiep.component';
import { ShowgoikhachhangComponent } from './showgoikhachhang/showgoikhachhang.component';
import { ShowcustomerComponent } from './showcustomer/showcustomer.component';


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
  
    ChangepasswordComponent,
  
  
  
    TaogoidoanhnghiepadminComponent,
  
  
  
    TaogoikhachhangComponent,
  
  
  
    CapnhatgoidoanhnghiepComponent,
  
  
  
    CapnhatgoikhachhangComponent,
  
  
  
    EnterpriseComponent,
  
  
  
    ShowgoidoanhnghiepComponent,
  
  
  
    ShowgoikhachhangComponent,
  
  
  
    ShowcustomerComponent,
  
  
  

  
  
  
   
  

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
  
    FormsModule,

    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'register', component: RegisterComponent },
      {path:'dangkidoanhnghiepvanchuyen', component:DangkidoanhnghiepvanchuyenComponent},
      { path: 'changepassword', component: ChangepasswordComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'dichvuvanchuyen', component: DichvuvanchuyenComponent },
      { path: 'dichvukhachhang', component: DichvukhachhangComponent },
      { path: 'profile', component: ProfileComponent },
     
     

      { path: 'taogoikhachhang', component: TaogoikhachhangComponent },
      { path: 'dichvudoanhnghiep', component: DichvudoanhnghiepComponent },
      
      { path: 'notification', component: NotificationComponent },
      
      { path: 'profile', component: ProfileComponent },
      { path: 'profile-doanhnghiep', component: ProfileDoanhnghiepComponent },
      { path: 'order', component: OrderComponent },
      {path:'admin', component:AdminComponent},
      {path:'quanli_doanh_nghiep', component:QuanlidoanhnghiepComponent},
    
      { path:'taogoidoanhnghiepadmin', component: TaogoidoanhnghiepadminComponent },
      { path: 'capnhatgoidoanhnghiep/:id', component: CapnhatgoidoanhnghiepComponent },
      { path: 'capnhatgoikhachhang/:id', component: CapnhatgoikhachhangComponent },
      { path: 'enterprise', component: EnterpriseComponent },
      { path: 'showgoidoanhnghiep', component:  ShowgoidoanhnghiepComponent},
      { path: 'showgoikhachhang', component:  ShowgoikhachhangComponent},

    ])
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponent=[CapnhatgoidoanhnghiepComponent]