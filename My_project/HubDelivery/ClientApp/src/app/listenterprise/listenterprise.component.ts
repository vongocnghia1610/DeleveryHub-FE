import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import { from } from 'rxjs/observable/from';
import{FormGroup} from'@angular/forms';
import {Observable} from 'rxjs';
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-;istenterprise',
  templateUrl: './listenterprise.component.html',
  styleUrls: ['./listenterprise.component.css']
})

export class listEnterpriseComponent implements OnInit {
  
  formGroup =new FormGroup({
    idDoanhNghiep: new FormControl(""),
    Ten: new FormControl(""),
    DiaChi: new FormControl(""),
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
            
     return this.http.get(`https://be-b010.herokuapp.com/admin/show-enterprises`, {headers:headers}).subscribe(data=>
     
     {
      this.getdata();
      this.array=Object.entries(data)
      this.array=Object.values(this.array[0][1])
      this.a= this.array.find(x => x._id === id);
      this.a=Object.entries(this.a)
      console.log(this.a)
      console.log(this.a[1][1])
      this.formGroup= new FormGroup({
      idDoanhNghiep: new FormControl(this.a[4][1]),
      Ten: new FormControl(this.a[5][1]),
      SoDienThoai: new FormControl(this.a[7][1]),
     DiaChi: new FormControl(this.a[8][1]),
    })
     })
      
      }
  getdata(){
    
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
        
   this.http.get(`https://be-b010.herokuapp.com/admin/show-enterprises`, {headers:headers}).subscribe((res)=>

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
    
        
        return this.http.put(`https://be-b010.herokuapp.com/admin/editprofile-enterprise`, data, {headers:headers});
      }
  updateenterprise(){


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
