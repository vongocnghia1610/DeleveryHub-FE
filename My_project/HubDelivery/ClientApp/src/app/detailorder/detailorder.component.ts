import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable, } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-detailorder',
  templateUrl: './detailorder.component.html',
  styleUrls: ['./detailorder.component.css']
})
export class DetailorderComponent implements OnInit {

  formGroup = new FormGroup({
    TenNguoiNhan: new FormControl(""),
    SoDienThoaiNguoiNhan: new FormControl(""),
    NoiNhanHang: new FormControl(""),
    NoiGiaoHang: new FormControl(""),
    KhoiLuong: new FormControl(""),
    TenLoaiHang: new FormControl(""),
    LoaiHangHoa:new FormControl(""),
    ThanhToan: new FormControl(""),
    TongChiPhi: new FormControl(""),
    GiamGia: new FormControl(""),
   
  })
  array:any=[]
  detailorder:any[]
  i:any
  j:any
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    this.i=0;
   this.http.get(`http://54.255.93.14/customers/show-order`, {headers:headers}).subscribe((res)=>

    { this.j=localStorage.getItem('idorder')
    console.log(this.j)
 
     this.array=Object.entries(res)
     this.array=Object.values(this.array[0][1])
     this.array.forEach(element => {
     
       if(this.array[this.i]._id==this.j)
       {
      this.detailorder=this.array[this.i]
   
     this.detailorder=Object.entries(this.detailorder)
     console.log(this.detailorder)
      this.formGroup = new FormGroup({
      TenNguoiNhan: new FormControl(this.detailorder[7][1]),
      SoDienThoaiNguoiNhan: new FormControl(this.detailorder[8][1]),
      NoiNhanHang: new FormControl(this.detailorder[9][1]),
      NoiGiaoHang: new FormControl(this.detailorder[10][1]),
      KhoiLuong: new FormControl(this.detailorder[11][1]),
      TenLoaiHang: new FormControl(this.detailorder[13][1]),
      LoaiHangHoa:new FormControl(this.detailorder[12][1]),
      ThanhToan: new FormControl(this.detailorder[2][1]),
      TongChiPhi: new FormControl(this.detailorder[14][1]),
      GiamGia: new FormControl(this.detailorder[1][1]),
     
    })
      this.i=this.i+1
    
       }
      else this.i=this.i+1

       
     });
    
    

     
    });
    
  }
  Quaylai(){
    this.router.navigate(['/showorder'])
  }

}
