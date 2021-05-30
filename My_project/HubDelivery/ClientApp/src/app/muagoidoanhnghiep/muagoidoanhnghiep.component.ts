import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable, } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-muagoidoanhnghiep',
  templateUrl: './muagoidoanhnghiep.component.html',
  styleUrls: ['./muagoidoanhnghiep.component.css']
})
export class MuagoidoanhnghiepComponent implements OnInit {

  array: any = []
  a = []
  kq: any = []
  link = []
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.getdata();
    this.currentData();
    console.log(this.a
    )
  }
  getdata() {


    this.http.get(`http://54.255.93.14/enterprises/show-goidoanhnghiep`).subscribe((res) => {


      this.kq = Object.entries(res)
      this.kq = Object.values(this.kq[0][1])
      console.log(this.kq)
      return this.kq;



    });
  }

  currentData() {


    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token

    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    this.http.get(`http://54.255.93.14/me/information`, { headers: headers }).subscribe(data => {
      console.log(data)
      this.array = Object.entries(data)

      this.a = this.array[0][1];

    });



  }
  Paypal(j) {
    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token

    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    this.http.get(`http://54.255.93.14/me/information`, { headers: headers }).subscribe(data => {

      this.array = Object.entries(data)

      this.array = Object.values(this.array[0][1])
      console.log(this.array)
      console.log(this.array[1])
        let x = {
          id_GoiDichVu: j
        }
        this.http.post(`http://54.255.93.14/enterprises/create-bill-package`, x, { headers: headers }).subscribe(result => {
          console.log(result)

          this.link = Object.entries(result)

          console.log(this.link[0][1])
          window.open(this.link[0][1], '_blank')



        }, error => {

          alert(error.error.error)
    
        }
        );
      

    });
  }
  VNPay(j) {
    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token

    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    this.http.get(`http://54.255.93.14/me/information`, { headers: headers }).subscribe(data => {

      this.array = Object.entries(data)

      this.array = Object.values(this.array[0][1])
      console.log(this.array)
      console.log(this.array[1])
      let x = {
        id_GoiDichVu: j
      }
      this.http.post(`http://54.255.93.14/enterprises/create_payment_vnpayurl_package`, x, { headers: headers }).subscribe(result => {
        console.log(result)

        this.link = Object.entries(result)

        console.log(this.link[0][1])
        window.open(this.link[0][1], '_blank')



      }
      , error => {

        alert(error.error.error)
  
      });

    }
    );
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
