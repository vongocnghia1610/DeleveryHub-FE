import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
//import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
//import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
//import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RegisterComponent,
    LoginComponent,
    //ServicesComponent,
    HomeComponent,
    //ProfileComponent,
    NotificationComponent,
    //OrderComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      
      { path: '', component: NotificationComponent },
      //{ path: 'services', component: ServicesComponent },
      //{ path: '', component: OrderComponent },


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
