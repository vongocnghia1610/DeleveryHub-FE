import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import { from } from 'rxjs/observable/from';
import{FormGroup} from'@angular/forms';
import {Observable} from 'rxjs';
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  formGroup : FormGroup;
  constructor(private http:HttpClient,
    private router:Router) { }
  ngOnInit() {
    this.initForm();
    
  }
  changepass(data):Observable<any>{
    let headers= new HttpHeaders();
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
var token = currentUser.token; // your token
console.log(token);
headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);

    
    console.log("I am server");
    return this.http.put(`http://54.255.93.14/me/change-password`, data, {headers:headers});
  }
  initForm(){
    this.formGroup= new FormGroup({
      PasswordOld: new FormControl("",[ Validators.required]),
      PasswordNew: new FormControl("", [Validators.required]),
      ConfirmPassword: new FormControl("",[ Validators.required]),
      
   
    }); 

  }
 
    changepassProces(){
      
    
      
      const passwordOld = this.formGroup.get('PasswordOld').value;
      const ConfirmPassword = this.formGroup.get('ConfirmPassword').value;
      const passwordNew = this.formGroup.get('PasswordNew').value;
     
     if(passwordNew != ConfirmPassword || passwordNew=="" || ConfirmPassword=="")
     {
      alert("Password not match");
       return;
     }
    
    
     else{
      if (this.formGroup.valid){
      this.changepass(this.formGroup.value).subscribe((result) =>{
        
        if(result)
         console.log( result);
         alert("Thay đổi  thành công");
       
          
          
        

      });

     
     
    }
  
    else alert("Bạn chưa nhập đầy đủ thông tin");
  
  }
  
     
    
    }

}
