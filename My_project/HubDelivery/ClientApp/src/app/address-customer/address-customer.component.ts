import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams , HttpRequest} from '@angular/common/http';
import {} from '@angular/common'
import { from } from 'rxjs/observable/from';
import{Router} from '@angular/router'
import {FormControl, FormsModule, Validators} from '@angular/forms';
import{FormGroup} from'@angular/forms';
import {Observable,} from 'rxjs';

@Component({
  selector: 'app-address-customer',
  templateUrl: './address-customer.component.html',
  styleUrls: ['./address-customer.component.css']
})
export class AddressCustomerComponent implements OnInit {

  formGroup =new FormGroup({
    _id: new FormControl(""),
    address: new FormControl(""),
  
    
    
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
            
     return this.http.get(`http://54.255.93.14/customers/show_diachi`, {headers:headers}).subscribe(data=>
     
     {
      this.getdata();
      this.array=Object.entries(data)
      this.array=Object.values(this.array[0][1])
      this.a= this.array.find(x => x._id === id);
      this.a=Object.entries(this.a)
      console.log(this.a)
      console.log(this.a[1][1])
      this.formGroup= new FormGroup({
      _id: new FormControl(this.a[0][1]),
    address: new FormControl(this.a[1][1]),
    })
     })
      
      }
  getdata(){
    
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token

    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
        
   this.http.get(`http://54.255.93.14/customers/show_diachi`, {headers:headers}).subscribe((res)=>

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

    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    
        
        return this.http.put(`http://54.255.93.14/me/edit-address`, data, {headers:headers});
      }
  updateaddress(){


    if (this.formGroup.valid){
    this.update(this.formGroup.value).subscribe((result) =>{
     
      
      if(result)
      console.log(result)
      this.getdata();
       alert("Update thành công");

    });

  }

  else alert("Bạn chưa nhập đầy đủ thông tin");

}
add(data):Observable<any>{
  
  let headers= new HttpHeaders();
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  var token = currentUser.token; // your token
  console.log(token);
  headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
  
      
      return this.http.post(`http://54.255.93.14/me/add-address`, data, {headers:headers});
    }
addaddress(){

  if (this.formGroup.valid){
  this.add(this.formGroup.value).subscribe((result) =>{
   
    
    if(result)
     console.log( result);
    
     alert("Thêm thành công");

      this.getdata()
      
    

  });

 
 
}

else alert("Bạn chưa nhập đầy đủ thông tin");

}

Xoa(j){
  let headers= new HttpHeaders();
 var currentUser = JSON.parse(localStorage.getItem('currentUser'));
 var token = currentUser.token; // your token
 headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
 console.log(j);
let data=
{
  _id:j
}

return this.http.put(`http://54.255.93.14/me/delete-address`,data ,{headers:headers} ).subscribe(
  
 result=>{
   
  this.getdata();
 
});

}
}
