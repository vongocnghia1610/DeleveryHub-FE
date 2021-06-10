import { Component, OnInit, Inject, ApplicationModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { } from '@angular/common'

import { Router } from '@angular/router'

@Component({
  selector: 'app-chongoiorder',
  templateUrl: './chongoiorder.component.html',
  styleUrls: ['./chongoiorder.component.css']
})
export class ChonGoiOrderComponent implements OnInit {

  array: any = []
  message = []
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


    this.http.get(`http://54.255.93.14/customers/show-shipping-package`).subscribe((res) => {


      this.array = Object.entries(res)
      this.array = Object.values(this.array[0][1])
      console.log(this.array);
      return this.array;



    });
  }

  Choose(j) {
    localStorage.setItem('idpackage',j)
    console.log(localStorage.getItem('idpackage'))
    this.router.navigate(['/order']);


   
  }

}