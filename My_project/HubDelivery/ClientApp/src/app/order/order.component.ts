
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable, } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'order-layout',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  tongtien: any
  thanhtien: any
  KMKH: any
  KMDN: any
  i=0

  array: any = []
  a = []
  kq: any = []
  link = []
  formGroup = new FormGroup({
    TenNguoiNhan: new FormControl(""),
    SoDienThoaiNguoiNhan: new FormControl(""),
    NoiLayHang: new FormControl(""),
    NoiGiaoHang: new FormControl(""),
    KhoiLuong: new FormControl(""),
    TenLoaiHang: new FormControl(""),
    id_GoiShipping:new FormControl(localStorage.getItem('idpackage'))
   
  })

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getdataaddress()
    this.tinhtien()
    //this.getGoi()
  }

  getdataaddress() {

    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);

    this.http.get(`http://54.255.93.14/customers/show_diachi`, { headers: headers }).subscribe((res) => {


      this.a = Object.values(res)

      this.a = Object.values(this.a)
      this.a = (this.a[0])
      console.log(this.a)
      return this.a;



    });
  }
  getdatagoi() {

    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);

    this.http.get(`http://54.255.93.14/customers/show-shipping-package`, { headers: headers }).subscribe((res) => {


      this.kq = Object.values(res)

      this.kq = Object.values(this.kq)
      this.kq = (this.kq[0])
      console.log(this.kq)
      return this.kq;



    });
  }
  tinhtien()
  {
  
    if(this.formGroup.controls['id_GoiShipping'].value!='' && this.formGroup.controls['KhoiLuong'].value!=null)
    {
      let headers = new HttpHeaders();
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser.token; // your token

      headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
      var param =
      {
        KhoiLuong : this.formGroup.controls['KhoiLuong'].value,
        id_GoiShipping : this.formGroup.controls['id_GoiShipping'].value
      }
      this.http.get(`http://54.255.93.14/customers/show-cost`,{ headers: headers ,params:param}).subscribe(data => {

        console.log(data);
        var result = JSON.stringify(data)
        var result1 = JSON.parse(result)
        
        if (this.tongtien==null) {
          this.KMDN = result1["data"]["SoTienGiamDuocDoDoanhNghiep"];
          this.KMKH = result1["data"]["SoTienGiamDuocDoGoi"];
          this.tongtien = result1["data"]["TongGiaChuaGiam"];
          this.thanhtien = result1["data"]["TongChiPhi"];
          console.log(this.tongtien)
        }

      }, error => {
        

        alert("Khối lượng lớn khối lượng tối đa mà bạn đang mua")

      });
    }

  }
  Paypal() {
    if (this.formGroup.valid) {
      let headers = new HttpHeaders();
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser.token; // your token

      headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


      this.http.post(`http://54.255.93.14/customers/create-donhang`, this.formGroup.value, { headers: headers }).subscribe(data => {

        console.log(data);
        var result = JSON.stringify(data)
        var result1 = JSON.parse(result)
        if (result1["data"] != "null") {
          window.open(result1["data"], '_blank')
        }
        else {
          alert(result1["error"])

        }
      }, error => {

        alert(error.error)

      });
    }
    else {
      alert("Vui lòng nhập đủ thông tin");
    }

  }
  VNPay() {
    if (this.formGroup.valid) {

      let headers = new HttpHeaders();
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser.token; // your token

      headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);

      this.http.post(`http://54.255.93.14/customers/create_payment_vnpayurl`, this.formGroup.value, { headers: headers }).subscribe(data => {

        console.log(data);
        var result = JSON.stringify(data)
        var result1 = JSON.parse(result)
        if (result1["data"] != "null") {
          window.open(result1["data"], '_blank')
        }
        else {
          alert(result1["error"])

        }
      }, error => {

        alert(error.error.error)

      });
    }

    else {
      alert("Vui lòng nhập đủ thông tin");
    }
  }
//   getGoi(){
//     var idpackage=localStorage.getItem("idpackage")
//     var param =
//     {
     
//       id_GoiShipping : idpackage
//     }
//     this.http.get(`http://54.255.93.14/customers/show-shipping-package`, ).subscribe(data => {

      
//       this.array = Object.entries(data)
//       this.array = Object.values(this.array[0][1])
      
     
     
// console.log(this.array)
//       this.array.forEach(element => {
//         if(localStorage.getItem('idpackage')=='"'+this.array[this.i]._id+'"')
//         {
//          this.KMDN= this.array[this.i].KhuyenMai
//          this.T
//           this.i=this.i+1
//         }
//         else this.i=this.i+1
       

        
//       });
     
//       return this.array;
//       // var result = JSON.stringify(data)
//       // var result1 = JSON.parse(result)
      
//       // if (this.tongtien==null) {
//       //   this.KMDN = result1["data"]["SoTienGiamDuocDoDoanhNghiep"];
//       //   this.KMKH = result1["data"]["SoTienGiamDuocDoGoi"];
//       //   this.tongtien = result1["data"]["TongGiaChuaGiam"];
//       //   this.thanhtien = result1["data"]["TongChiPhi"];
//       //   console.log(this.tongtien)
//       // }

//     }, error => {

//       alert(error.error)

//     });
  

    
//   }
}
