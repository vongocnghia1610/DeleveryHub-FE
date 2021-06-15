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


  array: any = []
  a = []
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

    this.http.get(`https://be-b010.herokuapp.com/admin/show-thongke-thang`, { headers: headers }).subscribe((res) => {
      this.array = Object.entries(res)
      this.array = Object.values(this.array[0][1])
      console.log(this.array);
      return this.array;

    });
  }
  thangnay() {

    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    return this.http.get(`https://be-b010.herokuapp.com/admin/show-thongke-thang`, { headers: headers }).subscribe((res) => {
      var temp = new Date();
      var thang = temp.getMonth() +1;
      
      alert("Thống kê tháng " + thang);
      var data = Object.entries(res)
      console.log(data);
      this.array = Object.values(data[0][1])
      this.a = Object.values(data) 
      console.log(this.a);
      return this.array;

    });
  }
  thangtruoc() {

    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    return this.http.get(`https://be-b010.herokuapp.com/admin/show-thongke-thang-truoc`, { headers: headers }).subscribe((res) => {
      var temp = new Date();
      var temp1 = temp.getMonth();
      var thang;
      if (temp1 == 0) {
        thang = 12;
      }
      else {
        thang = temp1;
      }
      alert("Thống kê tháng " + thang);
      this.array = Object.entries(res)
      this.array = Object.values(this.array[0][1])
      console.log(this.array);
      return this.array;

    });
  }
  updateenterprise() {





  }

}
