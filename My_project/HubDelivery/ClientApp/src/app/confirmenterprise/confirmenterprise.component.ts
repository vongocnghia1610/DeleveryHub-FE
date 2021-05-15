
import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import { from } from 'rxjs/observable/from';
import{FormGroup} from'@angular/forms';
import {Observable} from 'rxjs';
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-confirmenterprise',
  templateUrl: './confirmenterprise.component.html',
  styleUrls: ['./confirmenterprise.component.css']
})
export class ConfirmenterpriseComponent implements OnInit {

 
  array:any=[]
  a=[]
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
   
    this.getdata();
  }
  
  getdata(){
    
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token

    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
        
   this.http.get(`http://54.255.93.14/admin/show-enterprises-inactive`, {headers:headers}).subscribe((res)=>

    {
     this.array=Object.entries(res)
     this.array=Object.values(this.array[0][1])
     console.log(this.array);
    return this.array;
    
    });
  }
  confirm(j){
  
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    let data=
    {
      idDoanhNghiep:j
    }
        
     this.http.put(`http://54.255.93.14/admin/confirm-doanhnghiep`, data, {headers:headers}).subscribe(result=>{
     console.log(result)
     if(result){
     alert("Xác nhận thành công")
     this.getdata();
     }
     
     });
     
      
  }    
      


  



}
