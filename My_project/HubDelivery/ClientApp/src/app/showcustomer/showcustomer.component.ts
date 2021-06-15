import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams , HttpRequest} from '@angular/common/http';
import {} from '@angular/common'
import { from } from 'rxjs/observable/from';
import{Router} from '@angular/router'
import {FormControl, FormsModule, Validators} from '@angular/forms';
import{FormGroup} from'@angular/forms';
import {Observable,} from 'rxjs';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.component.html',
  styleUrls: ['./showcustomer.component.css']
})
export class ShowcustomerComponent implements OnInit {
  formGroup =new FormGroup({
    idKhachHang: new FormControl(""),
    Ten: new FormControl(""),
    SoDienThoai: new FormControl(""),
    
    
    })
  array:any=[]
  a=[]
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
   
    this.getdata();
  }
  currentData(id)
      {
        let headers= new HttpHeaders();
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser.token; // your token
        console.log(token);
        headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
            
     return this.http.get(`https://be-b010.herokuapp.com/admin/show-customers`, {headers:headers}).subscribe(data=>
     
     {
      this.getdata();
      this.array=Object.entries(data)
      this.array=Object.values(this.array[0][1])
      this.a= this.array.find(x => x._id === id);
      this.a=Object.entries(this.a)
      console.log(this.a)
      console.log(this.a[1][1])
      this.formGroup= new FormGroup({
      idKhachHang: new FormControl(this.a[5][1]),
      Ten: new FormControl(this.a[7][1]),
      SoDienThoai: new FormControl(this.a[9][1]),})
     })
      
      }
  getdata(){
    
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token

    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
        
   this.http.get(`https://be-b010.herokuapp.com/admin/show-customers`, {headers:headers}).subscribe((res)=>

    {
     this.array=Object.entries(res)
     this.array=Object.values(this.array[0][1])
     console.log(this.array);
    return this.array;
    
    });
  }
  update(data):Observable<any>{
  
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    
        
        return this.http.put(`https://be-b010.herokuapp.com/admin/editprofile-customer`, data, {headers:headers});
      }
  updatekhachhang(){


    if (this.formGroup.valid){
    this.update(this.formGroup.value).subscribe((result) =>{
     
      
      if(result)
       console.log( result);
      this.getdata();
       alert("Update thành công");

    });

  }

  else alert("Bạn chưa nhập đầy đủ thông tin");

}

  
}

