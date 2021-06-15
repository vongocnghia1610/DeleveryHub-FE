import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable, } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { } from '@angular/common'
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-shippingpackage-enterprise',
  templateUrl: './shippingpackage-enterprise.component.html',
  styleUrls: ['./shippingpackage-enterprise.component.css']
})
export class ShippingpackageEnterpriseComponent implements OnInit {

  array: any = []
  mang: any = []
  a = []
  formGroup = new FormGroup({
    LoaiVanChuyen: new FormControl(""),
    idPackageOld: new FormControl(""),
    ChiPhi: new FormControl(""),
    NoiNhan: new FormControl(""),
    NoiGiao: new FormControl(""),
    IdLoaiHangHoa: new FormControl(""),
    KhuyenMai: new FormControl(""),



  })
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.getdata();
    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    this.http.get(`https://be-b010.herokuapp.com/enterprises/show-product-type`, { headers: headers }).subscribe((res) => {


      this.mang = Object.entries(res)
      this.mang = Object.values(this.mang[0][1])
      return this.mang;



    });
  }
  getdata() {
    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);

    this.http.get(`https://be-b010.herokuapp.com/enterprises/show-shipping-package-by-enterprise`, { headers: headers }).subscribe((res) => {


      this.array = Object.entries(res)
      this.array = Object.values(this.array[0][1])
      console.log(this.array);
      return this.array;
    });
  }

  currentData(id) {

    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);

    this.http.get(`https://be-b010.herokuapp.com/enterprises/show-shipping-package-by-enterprise`, { headers: headers }).subscribe(data => {
      this.array = Object.entries(data)
      this.array = Object.values(this.array[0][1])

      this.a = this.array.find(x => x._id === id);
      this.a = Object.entries(this.a)

      console.log(this.a)

      this.formGroup = new FormGroup({

        LoaiVanChuyen: new FormControl(this.a[3][1]),
        idPackageOld: new FormControl(this.a[2][1]),
        ChiPhi: new FormControl(this.a[4][1]),
        NoiNhan: new FormControl(this.a[5][1]),
        NoiGiao: new FormControl(this.a[6][1]),
        IdLoaiHangHoa: new FormControl(this.a[12][1]),
        KhuyenMai: new FormControl(this.a[0][1])
      })
      //this.formGroup.patchValue({ IdLoaiHangHoa: this.a[12][1] });

    });
    ;


  }
  Xoa(j) {
    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    console.log(j);
    let data =
    {
      idPackage: j
    }
    return this.http.put(`https://be-b010.herokuapp.com/enterprises/delete-shipping-package`, data, { headers: headers }).subscribe(

      result => {
        console.log("aa")
        this.getdata();

      });

  }
  taoshippingpackage() {
    this.router.navigate(['./createshippingpackage'])
  }
  update(data): Observable<any> {

    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);

    console.log(data)
    return this.http.put(`https://be-b010.herokuapp.com/enterprises/update-shipping-package`, data, { headers: headers });
  }

  updateshippingpackake() {
    this.formGroup.patchValue({ IdLoaiHangHoa: this.a[7][1] });
    if (this.formGroup.valid) {
      this.update(this.formGroup.value).subscribe((result) => {
        if (result)
          this.getdata();
          this.formGroup.patchValue({ IdLoaiHangHoa: this.a[12][1] });


        console.log(result);

        alert("Update thành công");

      });
    }
    else alert("Bạn chưa nhập đầy đủ thông tin");

  }
}