import { Component, OnInit, OnDestroy} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import{FormGroup} from'@angular/forms';
import {Observable,} from 'rxjs';
import {  ActivatedRoute , Router} from '@angular/router';

import {} from '@angular/common'
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-enterprisedelivery',
  templateUrl: './enterprisedelivery.component.html',
  styleUrls: ['./enterprisedelivery.component.css']
})
export class EnterprisedeliveryComponent implements OnInit {
  array:any=[]
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    
  }
  getdata(){
    this.currentData().subscribe(data=>
      { 
       this.array=Object.entries(data)
          this.array=Object.entries(this.array[0][1])
          console.log(this.array)
      
        
  
       console.log(this.array[1][1])
       if(this.array[1][1]==null)
       alert("Bạn chưa mua gói doanh nghiệp, vui lòng mua gói doanh nghiệp, Click Mua gói doanh nghiệp để mua !!")
       else 
       this.router.navigate(['./shippingpackage-enterprise'])
      })
      
   }
  
    currentData()
    {
     
      let headers= new HttpHeaders();
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser.token; // your token
      console.log(token);
      headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
  
   return this.http.get(`http://54.255.93.14/me/information`, {headers:headers});
    }

}
