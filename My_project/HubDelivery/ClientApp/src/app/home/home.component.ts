
import { Component, OnInit, OnDestroy} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import{FormGroup} from'@angular/forms';
import {Observable,} from 'rxjs';
import {  ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private http:HttpClient) { }

  ngOnInit(): void {
    this.currentData().subscribe(result=>
      { console.log(result)
      //  this.array=Object.entries(data)
      //     this.array=Object.values(this.array[0][1])
      //   this.a= this.array.find(x => x._id === id);
      //   this.a=Object.entries(this.a)
      //   console.log(this.a)
      //   console.log(this.a[1][1])
      //   this.formGroup= new FormGroup({
      //     TenDichVuKhachHang: new FormControl(this.a[3][1]),
      //     ThongTin: new FormControl(this.a[4][1]),
      //     ChiPhi: new FormControl(this.a[6][1]),
      //     HanSuDung: new FormControl(this.a[7][1]),
      //     SoDonHang: new FormControl(this.a[8][1]),
      //     idGoiKhachHang: new FormControl(this.a[2][1]),
      //     KhoiLuongToiDa: new FormControl(this.a[5][1]),
      //     GiamGia : new FormControl(this.a[0][1])

        })
  }

  currentData()
  {
   
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    
 return this.http.get(`http://54.255.93.14/me/information`, {headers:headers});

  
  }

}
