import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams , HttpRequest} from '@angular/common/http';
import {} from '@angular/common'
import { from } from 'rxjs/observable/from';
import{Router} from '@angular/router'
import {FormControl, FormsModule, Validators} from '@angular/forms';
import{FormGroup} from'@angular/forms';
import {Observable,} from 'rxjs';
import { stringify } from '@angular/core/src/util';


@Component({
  selector: 'app-producttype',
  templateUrl: './producttype.component.html',
  styleUrls: ['./producttype.component.css']
})
export class ProducttypeComponent implements OnInit {

  formGroup =new FormGroup({
    idLoaiSanPham: new FormControl(""),
   LoaiHangHoa: new FormControl(""),
    SoKy: new FormControl(""),
    
    
    
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
            
     return this.http.get(`http://54.255.93.14/admin/show-product-type`, {headers:headers}).subscribe(data=>
     
     {
      this.getdata();
      this.array=Object.entries(data)
      this.array=Object.values(this.array[0][1])
      this.a= this.array.find(x => x._id === id);
      this.a=Object.entries(this.a)
      console.log(this.a)
      console.log(this.a[1][1])
      this.formGroup= new FormGroup({
       idLoaiSanPham: new FormControl(this.a[1][1]),
      LoaiHangHoa: new FormControl(this.a[2][1]),
      SoKy: new FormControl(this.a[3][1]),})
     })
      
      }
  getdata(){
    
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token

    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
        
   this.http.get(`http://54.255.93.14/admin/show-product-type`, {headers:headers}).subscribe((res)=>

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
    
        
        return this.http.put(`http://54.255.93.14/admin/update-product-type`, data, {headers:headers});
      }
  updateproducttype(){


    if (this.formGroup.valid){
    this.update(this.formGroup.value).subscribe((result) =>{
     
      
    
       console.log( result);
     
       alert("Update thành công");
       this.getdata();
      
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


return this.http.delete(`http://54.255.93.14/admin/delete-product-type`,{headers:headers} ).subscribe(
  
 result=>{
   
  this.getdata();
 
});

}
register(data):Observable<any>{
  
  let headers= new HttpHeaders();
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  var token = currentUser.token; // your token
  console.log(token);
  headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
  
  
      return this.http.post(`http://54.255.93.14/admin/create-product-type`, data, {headers:headers});
    }
registerproducttype(){

  if (this.formGroup.valid){
  this.register(this.formGroup.value).subscribe((result) =>{
   
    
    
      console.log( result);
    
      alert("Đăng kí thành công");
      this.getdata()
  
  
      
      
    

  });

 
 
}

else alert("Bạn chưa nhập đầy đủ thông tin");

}

}
