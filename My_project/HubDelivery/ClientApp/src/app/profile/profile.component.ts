import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable, } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  array: any = []
  a = []
  kq: any = []
  link = []
  formGroup = new FormGroup({
    TenKhachHang: new FormControl(""),
    SoDienThoai: new FormControl(""),
    Email: new FormControl(""),




  })
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.currentData()
  }
  currentData() {


    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token

    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    this.http.get(`https://be-b010.herokuapp.com/me/information`, { headers: headers }).subscribe(data => {
      console.log(JSON.stringify(data))
      var jsonvalue = JSON.stringify(data)
      var valueFromJson  = JSON.parse(jsonvalue)
      this.formGroup = new FormGroup({
        TenKhachHang: new FormControl(valueFromJson.data.TenKhachHang),
        SoDienThoai: new FormControl(valueFromJson.data.SoDienThoai),
        Email: new FormControl(valueFromJson.data.Email),




      })










    });


  }
  update(data): Observable<any> {

    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    return this.http.put(`https://be-b010.herokuapp.com/me/edit-profile-customer`, data, { headers: headers });
  }


  updateinfo() {

    if (this.formGroup.valid) {
      this.update(this.formGroup.value).subscribe((result) => {


        if (result)
          console.log(result);

        alert("Update thành công");

      });

    }

    else alert("Bạn chưa nhập đầy đủ thông tin");

  }
}
