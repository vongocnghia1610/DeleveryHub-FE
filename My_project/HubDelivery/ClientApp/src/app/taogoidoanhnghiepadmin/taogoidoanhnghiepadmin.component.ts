import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import { from } from 'rxjs/observable/from';
import{FormGroup} from'@angular/forms';
import {Observable} from 'rxjs';
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-taogoidoanhnghiepadmin',
  templateUrl: './taogoidoanhnghiepadmin.component.html',
  styleUrls: ['./taogoidoanhnghiepadmin.component.css']
})
export class TaogoidoanhnghiepadminComponent implements OnInit {

  formGroup : FormGroup;
  constructor(private http:HttpClient,
    private router:Router) { }
  ngOnInit() {
    this.initForm();

    
  }
  register(data):Observable<any>{
  
let headers= new HttpHeaders();
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
var token = currentUser.token; // your token
console.log(token);
headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    return this.http.post(`http://54.255.93.14/admin/create-goidoanhnghiep`, data, {headers:headers});
  }
  initForm(){
    this.formGroup= new FormGroup({
      TenGoi: new FormControl("",[ Validators.required]),
      ThongTin: new FormControl("", [Validators.required]),
      ChiPhi: new FormControl("",[ Validators.required]),
      HanSuDung: new FormControl("",[ Validators.required]),
    SoDonHang: new FormControl("",[ Validators.required]),

   
    }); 

  }
  
 
    registergoi(){

      if (this.formGroup.valid){
      this.register(this.formGroup.value).subscribe((result) =>{
       
        
        if(result)
         console.log( result);
        
         alert("Đăng kí thành công");
  
          
          
        

      });

     
     
    }
  
    else alert("Bạn chưa nhập đầy đủ thông tin");
  
  }
  
     
    
    

}
