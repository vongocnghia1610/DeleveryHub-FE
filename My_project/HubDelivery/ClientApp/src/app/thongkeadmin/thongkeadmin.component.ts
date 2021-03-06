import { Component, OnInit, Inject, ApplicationModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-;istenterprise',
  templateUrl: './thongkeadmin.component.html',
  styleUrls: ['./thongkeadmin.component.css']
})

export class ThongKeAdminComponent implements OnInit {

  active: boolean = true;
  array: any = []
  a = []
  tongtien: any
  tongdonhang: any
  tongtiengiam: any
  tongtienduadoanhnghiep: any
  tongtienloi5: any
  tonggoidaban: any
  tongtienbangoi: any
  tongdoanhthu: any
  tongloinhuan: any
  check: any
  thangnay: any
  thangtruoc: any

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getdata();
  }

  getdata() {

    this.check = false;
    var temp = new Date();
    this.thangnay = temp.getMonth() + 1;

    var temp1 = temp.getMonth();
    if (temp1 == 0) {
      this.thangtruoc = 12;
    }
    else {
      this.thangtruoc = temp1;
    }
  }
  btnthangnay() {

    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    return this.http.get(`https://be-b010.herokuapp.com/admin/show-thongke-thang`, { headers: headers }).subscribe((res) => {
      alert("Thống kê tháng " + this.thangnay);
      var data = Object.entries(res)
      console.log(data);
      this.array = Object.values(data[0][1])
      this.a = Object.values(data)
      console.log(this.a);
      this.tongtien = this.a[1][1]["TongTien"];
      this.tongdonhang = this.a[1][1]["TongDonHang"];
      this.tongtiengiam = this.a[1][1]["TongTienGiam"];
      this.tongtienduadoanhnghiep = this.a[1][1]["TongTienDuaDoanhNghiep"];
      this.tongtienloi5 = this.a[1][1]["TienLoi5"];
      this.tonggoidaban = this.a[2][1]["SoGoiDaBan"];
      this.tongtienbangoi = this.a[2][1]["TienGoiDichVu"];
      this.tongdoanhthu = this.a[3][1]["TongTatCaTien"];
      this.tongloinhuan = this.a[3][1]["TienLoi"];
      this.check = true;


    });
  }
  btnthangtruoc() {

    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    return this.http.get(`https://be-b010.herokuapp.com/admin/show-thongke-thang-truoc`, { headers: headers }).subscribe((res) => {

      alert("Thống kê tháng " + this.thangtruoc);
      var data = Object.entries(res)
      console.log(data);
      this.array = Object.values(data[0][1])
      this.a = Object.values(data)
      console.log(this.a);
      this.tongtien = this.a[1][1]["TongTien"];
      this.tongdonhang = this.a[1][1]["TongDonHang"];
      this.tongtiengiam = this.a[1][1]["TongTienGiam"];
      this.tongtienduadoanhnghiep = this.a[1][1]["TongTienDuaDoanhNghiep"];
      this.tongtienloi5 = this.a[1][1]["TienLoi5"];
      this.tonggoidaban = this.a[2][1]["SoGoiDaBan"];
      this.tongtienbangoi = this.a[2][1]["TienGoiDichVu"];
      this.tongdoanhthu = this.a[3][1]["TongTatCaTien"];
      this.tongloinhuan = this.a[3][1]["TienLoi"];
      this.check = true;

    });
  }
  updateenterprise(j) {

    localStorage.setItem('enterprise', j)
    console.log(localStorage.getItem('enterprise'))
    this.router.navigate(['/doisoatadmin']);
  }

}
