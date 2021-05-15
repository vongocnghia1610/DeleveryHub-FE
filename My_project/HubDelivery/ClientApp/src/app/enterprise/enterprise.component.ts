import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import { from } from 'rxjs/observable/from';
import{FormGroup} from'@angular/forms';
import {Observable} from 'rxjs';
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { a } from '@angular/core/src/render3';
@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})

export class EnterpriseComponent implements OnInit {
  
array:any=[
   {}
 ];
 t=[];
 x:any;
 
  constructor(private http:HttpClient) { 
    this.getdata();
  

  }
  ngOnInit() {
   
 
    
  }
  
    getdata(){
      let headers= new HttpHeaders();
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser.token; // your token
      console.log(token);
      headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
      
      
     this.http.get(`http://54.255.93.14/admin/show-customers`,{headers:headers}).subscribe((res)=>

      {
      
   
       this.array=Object.entries(res)
       this.array=Object.values(this.array[0][1])
       console.log(this.array);
       
       
  
      
      
     //  this.array=Object.entries( this.array);
       
    
     
      return this.array;
      

       
      });
    }

}
