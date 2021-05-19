
import { Component, OnInit, OnDestroy} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import{FormGroup} from'@angular/forms';
import {Observable,} from 'rxjs';
import {  ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'order-layout',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  array:any=[]
  a=[]
  kq:any=[]
  link=[]
  formGroup =new FormGroup({
    TenNguoiNhan: new FormControl(""),
   SoDienThoaiNguoiNhan: new FormControl(""),
    NoiLayHang: new FormControl(""),
    NoiGiaoHang: new FormControl(""),
   KhoiLuong: new FormControl(""),
    TenLoaiHang: new FormControl(""),
    id_GoiShipping: new FormControl(""),
  })
 
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.getdataaddress()
    this.getdatagoi()
  }
  
  getdataaddress(){
   
    let headers= new HttpHeaders();
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  var token = currentUser.token; // your token
  console.log(token);
  headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
  
    this.http.get(`http://54.255.93.14/customers/show_diachi`, {headers:headers}).subscribe((res)=>
 
     {
     
  
      this.a=Object.values(res)
      
      this.a=Object.values(this.a)
      this.a=(this.a[0])
      console.log(this.a)
     return this.a;
     
 
      
     });
   }
   getdatagoi(){
   
    let headers= new HttpHeaders();
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  var token = currentUser.token; // your token
  console.log(token);
  headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
  
    this.http.get(`http://54.255.93.14/enterprises/show-shipping-package`, {headers:headers}).subscribe((res)=>
 
     {
     
  
      this.kq=Object.values(res)
      
      this.kq=Object.values(this.kq)
      this.kq=(this.kq[0])
      console.log(this.kq)
     return this.kq;
     
 
      
     });
   }
 
   Paypal(){
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
  
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    
  
  this.http.post(`http://54.255.93.14/customers/create-donhang`,this.formGroup.value,{headers:headers}).subscribe(data=>
  {
  
 console.log(data)
  
  
  });
    
    
  
  
  }
  // vnPay(){
  //   let headers= new HttpHeaders();
  //   var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   var token = currentUser.token; // your token
  
  //   headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    
  
  // this.http.get(`http://54.255.93.14/me/information`,{headers:headers}).subscribe(data=>
  // {
  
  // this.array=Object.entries(data)
  
  // this.array=Object.values(this.array[0][1])
  // console.log(this.array)
  //   console.log(this.array[1])
  //   if(this.array[0]==null)
  //   {
  //     let x={
  //       id_GoiDichVu:j
  //     }
  //     this.http.post(`http://54.255.93.14/customers/create_payment_vnpayurl_package`, x, {headers:headers}).subscribe(result=>
  //       {
  //         console.log(result)
  
  //        this.link=Object.entries(result)
         
  //        console.log(this.link[0][1])
  //        window.open (this.link[0][1],'_blank')      
          
        
  
  //   });
  // }
  //   else alert("Bạn đã mua gói  doanh nghiệp r")
  
  // });
    
    
  
  
  // }
}
