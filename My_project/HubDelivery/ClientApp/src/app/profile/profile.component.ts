import { Component, OnInit, OnDestroy} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import{FormGroup} from'@angular/forms';
import {Observable,} from 'rxjs';
import {  ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  array:any=[]
  a=[]
  kq:any=[]
  link=[]
  formGroup =new FormGroup({
    TenKhachHang: new FormControl(""),
   SoDienThoai: new FormControl(""),
    Email: new FormControl(""),
 
  
    
    
    })
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.currentData()
  }
  currentData()
  {
  
   
   let headers= new HttpHeaders();
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser.token; // your token
    
      headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
      
    
  this.http.get(`http://54.255.93.14/me/information`,{headers:headers}).subscribe(data=>
  {
    console.log(data)
   this.array=Object.entries(data)
  
   this.array=Object.values(this.array[0][1])
   console.log(this.array)
   this.formGroup =new FormGroup({
    TenKhachHang: new FormControl(this.array[7]),
   SoDienThoai: new FormControl(this.array[9]),
    Email: new FormControl(this.array[8]),
 
  
    
    
    })
  
      
    
  
  
    
  
   
     
     
  });
  

}
update(data):Observable<any>{
  
  let headers= new HttpHeaders();
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  var token = currentUser.token; // your token
  console.log(token);
  headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
  
      
      return this.http.put(`http://54.255.93.14/me/edit-profile-customer`, data, {headers:headers});
    }
    
   
      updateinfo(){
  
        if (this.formGroup.valid){
        this.update(this.formGroup.value).subscribe((result) =>{
         
          
          if(result)
           console.log( result);
          
           alert("Update thành công");
    
        });
  
      }
    
      else alert("Bạn chưa nhập đầy đủ thông tin");
    
    }
}
