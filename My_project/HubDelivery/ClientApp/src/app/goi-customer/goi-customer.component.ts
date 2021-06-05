import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable, } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-goi-customer',
  templateUrl: './goi-customer.component.html',
  styleUrls: ['./goi-customer.component.css']
})
export class GoiCustomerComponent implements OnInit {
  goihientai: any
  array: any = []
  a = []
  kq: any = []
  link = []
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(`http://54.255.93.14/customers/show_goikhachhang`).subscribe((res) => {


      this.kq = Object.entries(res)
      this.kq = Object.values(this.kq[0][1])
      console.log(this.kq)
      return this.kq;



    });
    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token

    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    this.http.get(`http://54.255.93.14/me/information`, { headers: headers }).subscribe(data => {
      console.log(data)

      var result = JSON.stringify(data);
      this.goihientai = JSON.parse(result);
      console.log(this.goihientai["data"]);
      if (this.goihientai["data"]["SoDonHang"] == null)
        alert("Bạn chưa mua gói , vui lòng mua gói")
      else if (this.goihientai["data"]["SoDonHang"] <= 0)
        alert("Gói của bạn đã sử dụng hết, vui lòng mua gói mới")
      else if (Date.parse(this.goihientai["data"]["NgayHetHan"]) < Date.now())
        alert("Gói của bạn đã hết hạn, vui lòng mua mới")

    });
  }










  Paypal(j) {
    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token

    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);

      
      if (this.goihientai["data"]["SoDonHang"] == null || this.goihientai["data"]["SoDonHang"] <= 0 || Date.parse(this.goihientai["data"]["NgayHetHan"]) < Date.now()) {
        let x = {
          id_GoiDichVu: j
        }
        this.http.post(`http://54.255.93.14/customers/create-bill-package`, x, { headers: headers }).subscribe(result => {
          console.log(result)

          this.link = Object.entries(result)

          console.log(this.link[0][1])
          window.open(this.link[0][1], '_blank')



        });
      }
      else alert("Bạn đã mua gói  doanh nghiệp r")





  }
  vnPay(j) {
    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token

    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    this.http.get(`http://54.255.93.14/me/information`, { headers: headers }).subscribe(data => {

      
      if (this.goihientai["data"]["SoDonHang"] == null || this.goihientai["data"]["SoDonHang"] <= 0 || Date.parse(this.goihientai["data"]["NgayHetHan"]) < Date.now()) {
        let x = {
          id_GoiDichVu: j
        }
        this.http.post(`http://54.255.93.14/customers/create_payment_vnpayurl_package`, x, { headers: headers }).subscribe(result => {
          console.log(result)

          this.link = Object.entries(result)

          console.log(this.link[0][1])
          window.open(this.link[0][1], '_blank')



        });
      }
      else alert("Bạn đã mua gói  doanh nghiệp rồi")

    });




  }
  create(data): Observable<any> {
    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token

    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    console.log("I am server");
    return this.http.post(`http://54.255.93.14/enterprises/create-bill-package`, data, { headers: headers });
  }


}
