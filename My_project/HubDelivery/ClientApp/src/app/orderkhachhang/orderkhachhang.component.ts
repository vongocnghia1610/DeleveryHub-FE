import { Component, OnInit, Inject, ApplicationModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { } from '@angular/common'

import { Router } from '@angular/router'

@Component({
  selector: 'app-orderkhachhang',
  templateUrl: './orderkhachhang.component.html',
  styleUrls: ['./orderkhachhang.component.css']
})
export class OrderkhachhangComponent implements OnInit {

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


    this.http.get(`https://be-b010.herokuapp.com/enterprises/show-order-by-customers`, { headers: headers }).subscribe((res) => {


      this.array = Object.entries(res)
      this.array = Object.values(this.array[0][1])
      console.log(this.array);
      return this.array;



    });
  }

  delivered(j) {

    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    let data =
    {
      idDonHang: j
    }

    //     this.http.get(`https://be-b010.herokuapp.com/enterprises/show-order-by-customers`, {headers:headers}).subscribe((res)=>

    // {


    //  this.array=Object.entries(res)
    //  this.array=Object.values(this.array[0][1])
    //  this.message=Object.entries(this.array)
    //  console.log(this.array);




    // });

    this.currentData(j).subscribe(data => {
      this.array = Object.entries(data)
      this.array = Object.values(this.array[0][1])
      this.message = this.array.find(x => x._id === j);
      this.message = Object.entries(this.message)
      console.log(this.message)
      let a =
      {
        idDonHang: j
      }
      if (this.message[0][1] == "??ang Giao") {

        this.http.put(`https://be-b010.herokuapp.com/enterprises/update-delivered-order`, a, { headers: headers }).subscribe(data => {
          this.message = Object.entries(data)


          alert("??ang giao ==> ???? giao");
          this.getdata();
          return


        });
      }
      if (this.message[0][1] == "???? Nh???n H??ng") {
        alert("????n h??ng n??y kh??ch h??ng ???? nh???n r???i");

      }
      if (this.message[0][1] == "???? H???y ????n") {
        alert("????n h??ng n??y kh??ch h??ng ???? h???y r???i");

      }
      if (this.message[0][1] == "Ch??? x??c nh???n") {
        alert("????n h??ng n??y ch??a ???????c giao,click ???? giao h??ng ????? x??c nh???n");

      }
    })

  }
  delivering(j) {

    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    let data =
    {
      idDonHang: j
    }

    this.currentData(j).subscribe(data => {
      this.array = Object.entries(data)
      this.array = Object.values(this.array[0][1])
      this.message = this.array.find(x => x._id === j);
      this.message = Object.entries(this.message)
      console.log(this.message)
      let a =
      {
        idDonHang: j
      }
      if (this.message[0][1] == "Ch??? x??c nh???n") {

        this.http.put(`https://be-b010.herokuapp.com/enterprises/update-delivering-order`, a, { headers: headers }).subscribe(data => {
          this.message = Object.entries(data)


          alert("Ch??? x??c nh???n==> ??ang giao");
          this.getdata();
          return


        });
      }
      if (this.message[0][1] == "???? Nh???n H??ng") {
        alert("????n h??ng n??y kh??ch h??ng ???? nh???n r???i");

      }
      if (this.message[0][1] == "???? H???y ????n") {
        alert("????n h??ng n??y kh??ch h??ng ???? h???y r???i");

      }
      if (this.message[0][1] == "??ang Giao") {
        alert("????n h??ng n??y ??ang trong tr???ng th??i ??ang giao r???i");

      }
    })
  }


  currentData(id) {

    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);

    return this.http.get(`https://be-b010.herokuapp.com/enterprises/show-order-by-customers`, { headers: headers });


  }

}