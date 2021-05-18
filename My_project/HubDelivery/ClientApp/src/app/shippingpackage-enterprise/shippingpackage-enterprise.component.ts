import { Component, OnInit, OnDestroy} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import{FormGroup} from'@angular/forms';
import {Observable,} from 'rxjs';
import {  ActivatedRoute , Router} from '@angular/router';

import {} from '@angular/common'
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-shippingpackage-enterprise',
  templateUrl: './shippingpackage-enterprise.component.html',
  styleUrls: ['./shippingpackage-enterprise.component.css']
})
export class ShippingpackageEnterpriseComponent implements OnInit {

  array:any=[]
  a=[]
  formGroup =new FormGroup({
    LoaiVanChuyen: new FormControl(""),
    IdPackageOld: new FormControl(""),
    ChiPhi: new FormControl(""),
    NoiNhan: new FormControl(""),
    NoiGiao: new FormControl(""),
    IdLoaiHangHoa: new FormControl(""),
  
    
    
    })
  constructor(private http:HttpClient, private router:Router) { }
 
  ngOnInit() {
   
    this.getdata();
    
  }
  getdata(){
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    
    
   this.http.get(`http://54.255.93.14/enterprises/show-shipping-package-by-enterprise`, {headers:headers}).subscribe((res)=>

    {
    
 
     this.array=Object.entries(res)
     this.array=Object.values(this.array[0][1])
     console.log(this.array);
    return this.array;
    

     
    });
  }
 
currentData(id)
{
 

  
this.http.get(`http://54.255.93.14/enterprises/show-shipping-package`).subscribe(data=>
{
 this.array=Object.entries(data)
    this.array=Object.values(this.array[0][1])
 
  this.a= this.array.find(x => x._id === id);
  this.a=Object.entries(this.a)

  console.log(this.a)

  this.formGroup= new FormGroup({
  
    LoaiVanChuyen: new FormControl(this.a[3][1]),
IdPackageOld: new FormControl(this.a[2][1]),
    ChiPhi: new FormControl(this.a[4][1]),
    NoiNhan: new FormControl(this.a[5][1]),
    NoiGiao: new FormControl(this.a[6][1]),
    IdLoaiHangHoa: new FormControl(this.a[7][1]),

  })
   
   
});
;


}
taoshippingpackage(){
  this.router.navigate(['./createshippingpackage'])
}
update(data):Observable<any>{
  
  let headers= new HttpHeaders();
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  var token = currentUser.token; // your token
  console.log(token);
  headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
  
      
      return this.http.put(`http://54.255.93.14/enterprises/update-shipping-package`, data, {headers:headers});
    }
    private prepareSave(): any {
      let input = new FormData();
      // This can be done a lot prettier; for example automatically assigning values by looping through `this.form.controls`, but we'll keep it as simple as possible here
     
     
     
      
      input.append('NoiGiao', this.formGroup.get('NoiGiao').value);
      input.append('idLoaiHangHoa', this.formGroup.get('idLoaiHangHoa').value);
      input.append('idPackageOld', this.formGroup.get('idPackageOld').value);
      input.append('LoaiHangHoa', this.formGroup.get('LoaiHangHoa').value);
      input.append('ChiPhi', this.formGroup.get('ChiPhi').value);
      input.append('NoiNhan', this.formGroup.get('NoiNhan').value);
    
  
      return input;
    }
   
      updateshippingpackake(){
  
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