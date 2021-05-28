import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable, } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { } from '@angular/common'
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-createshippingpackage',
  templateUrl: './createshippingpackage.component.html',
  styleUrls: ['./createshippingpackage.component.css']
})
export class CreateshippingpackageComponent implements OnInit {

  array: any = []
  a = []
  // formGroupsp =new FormGroup({
  //   LoaiSanPham: new FormControl(""),
  // })
  formGroup = new FormGroup({
    LoaiVanChuyen: new FormControl(""),
    KhuyenMai: new FormControl(""),
    ChiPhi: new FormControl(""),
    NoiNhan: new FormControl(""),
    NoiGiao: new FormControl(""),
    IdLoaiHangHoa: new FormControl(""),

    GiamGia: new FormControl(""),

  })
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.getdata();

  }

  getdata() {
    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    this.http.get(`http://54.255.93.14/enterprises/show-product-type`, { headers: headers }).subscribe((res) => {


      this.array = Object.entries(res)
      this.array = Object.values(this.array[0][1])
      console.log(this.array);
      return this.array;



    });
  }




  create(data): Observable<any> {

    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    return this.http.post(`http://54.255.93.14/enterprises/create-shipping-package`, data, { headers: headers });
  }


  createshippingpackake() {

    if (this.formGroup.valid) {
      this.create(this.formGroup.value).subscribe((result) => {


        if (result)
          console.log(result);

        alert("Tạo thành công");

      });

    }

    else alert("Bạn chưa nhập đầy đủ thông tin");

  }

  quaylai() {
    this.router.navigate(['./shippingpackage-enterprise'])
  }
}
