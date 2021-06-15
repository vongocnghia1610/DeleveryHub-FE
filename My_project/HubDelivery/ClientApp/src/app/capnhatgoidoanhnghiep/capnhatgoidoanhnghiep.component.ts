import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import { from } from 'rxjs/observable/from';
import{FormGroup} from'@angular/forms';
import {Observable} from 'rxjs';
import { RouterModule } from '@angular/router';
import {Router, ActivatedRoute} from '@angular/router';
import { a } from '@angular/core/src/render3';
@Component({
  selector: 'app-capnhatgoidoanhnghiep',
  templateUrl: './capnhatgoidoanhnghiep.component.html',
  styleUrls: ['./capnhatgoidoanhnghiep.component.css']
})
export class CapnhatgoidoanhnghiepComponent implements OnInit {
  formGroup =new FormGroup({
  TenGoi: new FormControl(""),
  ThongTin: new FormControl(""),
  ChiPhi: new FormControl(""),
  HanSuDung: new FormControl(""),
  SoDonHang: new FormControl(""),
  idGoiDoanhNghiep: new FormControl(""),
  })
  array: any=[]
  a:any=[]
  constructor(private http:HttpClient,
    private router:ActivatedRoute, private route:Router) { }
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
          TenGoi: new FormControl(this.a[2][1]),
          ThongTin: new FormControl(this.a[3][1]),
          ChiPhi: new FormControl(this.a[4][1]),
          HanSuDung: new FormControl(this.a[5][1]),
          SoDonHang: new FormControl(this.a[6][1]),
          idGoiDoanhNghiep: new FormControl(this.a[1][1]),


        })
         
         
      });
    // this.initForm();

    
  }
  updategoi(data):Observable<any>{
  
let headers= new HttpHeaders();
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
var token = currentUser.token; // your token
console.log(token);
headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);

    console.log("I am server");
    return this.http.put(`https://be-b010.herokuapp.com/admin/update-goidoanhnghiep`, data, {headers:headers});
  }
  
    updategoidoanhnghiep(){

      if (this.formGroup.valid){
      this.updategoi(this.formGroup.value).subscribe((result) =>{
       console.log(result);
        
        if(result){

        
         console.log( result);
        
         alert("Update  thành công");
        }
          
          
        

      },error=>{
        alert("Update thất bại")
      }
      );

     
     
    }
  
    else alert("Bạn chưa nhập đầy đủ thông tin");
  
  }
  
  currentData(id)
  {
    let headers= new HttpHeaders();



let pramas1= new HttpParams().set('TenGoi', "sd")

    
 return this.http.get(`https://be-b010.herokuapp.com/enterprises/show-goidoanhnghiep`);

  
  }
  Quaylaitrang()
  {
    this.route.navigate(['/showgoidoanhnghiep'])
  }
    

}

