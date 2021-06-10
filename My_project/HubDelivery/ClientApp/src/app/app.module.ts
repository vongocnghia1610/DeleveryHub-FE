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
import { DangkidoanhnghiepvanchuyenComponent } from './dangkidoanhnghiepvanchuyen/dangkidoanhnghiepvanchuyen.component';
import { AdminComponent } from './admin/admin.component';
import { QuanlidoanhnghiepComponent } from './quanli_doanhnghiep/quanli_doanhnghiep.component';
import { from } from 'rxjs/observable/from';

import { ProfileDoanhnghiepComponent } from './profile-doanhnghiep/profile-doanhnghiep.component';
import { DichvukhachhangComponent } from './dichvukhachhang/dichvukhachhang.component';
import { DichvudoanhnghiepComponent } from './dichvudoanhnghiep/dichvudoanhnghiep.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

import { TaogoidoanhnghiepadminComponent } from './taogoidoanhnghiepadmin/taogoidoanhnghiepadmin.component';
import { TaogoikhachhangComponent } from './taogoikhachhang/taogoikhachhang.component';
import { CapnhatgoidoanhnghiepComponent } from './capnhatgoidoanhnghiep/capnhatgoidoanhnghiep.component';
import { CapnhatgoikhachhangComponent } from './capnhatgoikhachhang/capnhatgoikhachhang.component';
import { listEnterpriseComponent } from './listenterprise/listenterprise.component';
import { ShowgoidoanhnghiepComponent } from './showgoidoanhnghiep/showgoidoanhnghiep.component';
import { ShowgoikhachhangComponent } from './showgoikhachhang/showgoikhachhang.component';
import { ShowcustomerComponent } from './showcustomer/showcustomer.component';
import { ConfirmenterpriseComponent } from './confirmenterprise/confirmenterprise.component';
import { ProducttypeComponent } from './producttype/producttype.component';
import { EnterprisedeliveryComponent } from './enterprisedelivery/enterprisedelivery.component';
import { ShippingpackageEnterpriseComponent } from './shippingpackage-enterprise/shippingpackage-enterprise.component';
import { ThongkeOrderComponent } from './thongke-order/thongke-order.component';
import { OrderkhachhangComponent } from './orderkhachhang/orderkhachhang.component';
import { CreateshippingpackageComponent } from './createshippingpackage/createshippingpackage.component';
import { MuagoidoanhnghiepComponent } from './muagoidoanhnghiep/muagoidoanhnghiep.component';
import { AddressCustomerComponent } from './address-customer/address-customer.component';
import { GoiCustomerComponent } from './goi-customer/goi-customer.component';
import { ChonGoiOrderComponent } from './chongoiorder/chongoiorder.component';
import { LayoutnotloginComponent } from './layoutnotlogin/layoutnotlogin.component';
import { ShoworderComponent } from './showorder/showorder.component';
import { DetailorderComponent } from './detailorder/detailorder.component';


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



    listEnterpriseComponent,



    ShowgoidoanhnghiepComponent,



    ShowgoikhachhangComponent,

    ShowcustomerComponent,

    ConfirmenterpriseComponent,

    ProducttypeComponent,

    EnterprisedeliveryComponent,

    ShippingpackageEnterpriseComponent,

    ThongkeOrderComponent,

    OrderkhachhangComponent,

    CreateshippingpackageComponent,

    MuagoidoanhnghiepComponent,

    AddressCustomerComponent,

    GoiCustomerComponent,

    ChonGoiOrderComponent,

    LayoutnotloginComponent,

    ShoworderComponent,

    DetailorderComponent,







  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,

    FormsModule,

    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'register', component: RegisterComponent },
      { path: 'dangkidoanhnghiepvanchuyen', component: DangkidoanhnghiepvanchuyenComponent },
      { path: 'changepassword', component: ChangepasswordComponent },
      { path: '', component: LoginComponent },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'dichvuvanchuyen', component: DichvuvanchuyenComponent },
      { path: 'dichvukhachhang', component: DichvukhachhangComponent },
      { path: 'profile', component: ProfileComponent },



      { path: 'taogoikhachhang', component: TaogoikhachhangComponent },
      { path: 'dichvudoanhnghiep', component: DichvudoanhnghiepComponent },

      { path: 'notification', component: NotificationComponent },


      { path: 'profile-doanhnghiep', component: ProfileDoanhnghiepComponent },
      { path: 'order', component: OrderComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'quanli_doanh_nghiep', component: QuanlidoanhnghiepComponent },

      { path: 'taogoidoanhnghiepadmin', component: TaogoidoanhnghiepadminComponent },
      { path: 'capnhatgoidoanhnghiep/:id', component: CapnhatgoidoanhnghiepComponent },
      { path: 'capnhatgoikhachhang/:id', component: CapnhatgoikhachhangComponent },
      { path: 'listenterprise', component: listEnterpriseComponent },
      { path: 'showgoidoanhnghiep', component: ShowgoidoanhnghiepComponent },
      { path: 'showgoikhachhang', component: ShowgoikhachhangComponent },
      { path: 'showcustomer', component: ShowcustomerComponent },
      { path: 'confirmenterprise', component: ConfirmenterpriseComponent },
      { path: 'producttype', component: ProducttypeComponent },
      { path: 'enterprisedelivery', component: EnterprisedeliveryComponent },
      { path: 'shippingpackage-enterprise', component: ShippingpackageEnterpriseComponent },
      { path: 'thongke-order', component: ThongkeOrderComponent },
      { path: 'orderkhachhang', component: OrderkhachhangComponent },
      { path: 'createshippingpackage', component: CreateshippingpackageComponent },
      { path: 'muagoidoanhnghiep', component: MuagoidoanhnghiepComponent },
      { path: 'address-customer', component: AddressCustomerComponent },
      { path: 'goi-customer', component: GoiCustomerComponent },
      { path: 'chongoiorder', component: ChonGoiOrderComponent },
      { path: 'showorder', component: ShoworderComponent},
      { path: 'detailorder', component: DetailorderComponent},
     


    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponent = [CapnhatgoidoanhnghiepComponent]