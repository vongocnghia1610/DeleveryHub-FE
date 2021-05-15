import { Component, OnInit, OnDestroy} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import{FormGroup} from'@angular/forms';
import {Observable,} from 'rxjs';
import {  ActivatedRoute , Router} from '@angular/router';

import{Subscription} from 'rxjs/Subscription'
  
@Component({
  selector: 'app-capnhatgoikhachhang',
  templateUrl: './capnhatgoikhachhang.component.html',
  styleUrls: ['./capnhatgoikhachhang.component.css']
})
export class CapnhatgoikhachhangComponent implements OnInit {

  formGroup =new FormGroup({
    TenDichVuKhachHang: new FormControl(""),
    ThongTin: new FormControl(""),
    ChiPhi: new FormControl(""),
    HanSuDung: new FormControl(""),
    SoDonHang: new FormControl(""),
    idGoiKhachHang: new FormControl(""),
    KhoiLuongToiDa: new FormControl(""),
    GiamGia: new FormControl(""),
    
    })
    array: any=[]
    a:any=[]
  constructor(private http:HttpClient,
    private router:ActivatedRoute, private route:Router) {
     
     
     }
    
  ngOnInit() {
 

    let id=this.router.snapshot.params.id;
   
    this.currentData(id).subscribe(data=>
      {
       this.array=Object.entries(data)
          this.array=Object.values(this.array[0][1])
        this.a= this.array.find(x => x._id === id);
        this.a=Object.entries(this.a)
        console.log(this.a)
        console.log(this.a[1][1])
        this.formGroup= new FormGroup({
          TenDichVuKhachHang: new FormControl(this.a[3][1]),
          ThongTin: new FormControl(this.a[4][1]),
          ChiPhi: new FormControl(this.a[6][1]),
          HanSuDung: new FormControl(this.a[7][1]),
          SoDonHang: new FormControl(this.a[8][1]),
          idGoiKhachHang: new FormControl(this.a[2][1]),
          KhoiLuongToiDa: new FormControl(this.a[5][1]),
          GiamGia : new FormControl(this.a[0][1])

        })
         
         
      });
   

    
  }

    
  
  update(data):Observable<any>{
  
let headers= new HttpHeaders();
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
var token = currentUser.token; // your token
console.log(token);
headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);

    
    return this.http.put(`http://54.255.93.14/admin/update-goikhachhang`, data, {headers:headers});
  }
  
 
    updategoikhachhang(){

      if (this.formGroup.valid){
      this.update(this.formGroup.value).subscribe((result) =>{
       
        
        if(result)
         console.log( result);
        
         alert("Update thành công");
  
      });

    }
  
    else alert("Bạn chưa nhập đầy đủ thông tin");
  
  }
  

      currentData(id)
      {
       
    
        
     return this.http.get(`http://54.255.93.14/customers/show_goikhachhang`);
    
      
      }
      Quaylaitrang()
      {
        this.route.navigate(['/showgoikhachhang'])
      }
        
    
 

}
