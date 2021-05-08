
import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import { from } from 'rxjs/observable/from';
import{FormGroup} from'@angular/forms';
import {Observable} from 'rxjs';
import { AuthServiceService } from '../auth-service.service';
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup : FormGroup;
  constructor(private http:HttpClient,
    private router:Router) { }
  ngOnInit() {
    this.initForm();
    
  }
  register(data):Observable<any>{
    console.log("I am server");
    return this.http.post(`http://54.255.93.14/auth/register-khachhang`, data);
  }
  initForm(){
    this.formGroup= new FormGroup({
      TenKhachHang: new FormControl("",[ Validators.required]),
      Email: new FormControl("", [Validators.required]),
      DiaChi: new FormControl("",[ Validators.required]),
      Password: new FormControl("",[ Validators.required]),
    SoDienThoai: new FormControl("",[ Validators.required]),
    ConfirmPassword :new FormControl("",[Validators.required]),
    Checkbox :new FormControl("",[Validators.required]),
   
    }); 

  }
 
    registerProces(){
      
    
      
      const password = this.formGroup.get('Password').value;
      const confirmPassword = this.formGroup.get('ConfirmPassword').value;
      const checkbox = this.formGroup.get('Checkbox').value;
     
     if(password != confirmPassword || password=="" || confirmPassword=="")
     {
      alert("Password not match");
       return;
     }
    
     else if(checkbox !=true)
     {alert("Bạn chưa đồng ý điều khoản");
       return;
     
     }
     else{
      if (this.formGroup.valid){
      this.register(this.formGroup.value).subscribe((result) =>{
        
        if(result)
         console.log( result);
         alert("Đăng kí thành công");
       
          
          
        

      }, error=>{
        
        if( error.error != "Dang ky that bai")
        alert("Email này đã được đăng kí rồi !!");
        
      });

     
     
    }
  
    else alert("Bạn chưa nhập đầy đủ thông tin");
  
  }
  
     
    
    }

}
