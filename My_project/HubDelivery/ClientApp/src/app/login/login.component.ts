
import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import { from } from 'rxjs/observable/from';
import{FormGroup} from'@angular/forms';
import {Observable} from 'rxjs';
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formGroup : FormGroup;
  constructor(private http:HttpClient,
    private router:Router) { }
  ngOnInit() {
   
    this.initForm();
    //this.login(this.formGroup.valid);
  }
  login(data):Observable<any>{
    console.log("I am server");
    return this.http.post(`http://54.255.93.14/auth/login`, data);
  }
  initForm(){
    this.formGroup= new FormGroup({
      Email: new FormControl("", [Validators.required]),
      Password: new FormControl("",[ Validators.required])
    }); 

  }
    loginProces(){
      
    if (this.formGroup.valid){
      
      this.login(this.formGroup.value).subscribe((result) =>{
        
          
          if(result.error=="null")
          {
            console.log(result.data.token);
            localStorage.setItem('currentUser', JSON.stringify({ token: result.data.token }));
            localStorage.setItem('id', JSON.stringify({ id: result.data._id }));
           console.log(result)
           if(result.data.Role=="DOANHNGHIEP")
            this.router.navigate(['/enterprisedelivery']);
          else if(result.data.Role=="KHACHHANG")
          this.router.navigate(['/home']);
          else this.router.navigate(['/admin']);
            
          }

      }, error=>{
        
        if( error.error != "null")
        alert("Sai tài khoản hoặc mật khẩu");
        
      });
     
     
    }
    else alert("Bạn chưa nhập thông tin");
   
  
     
    
  }
  
 

  

 
 
  // postUser(Email, Password) {
  //   this.httpClient.post<any>('http://54.255.93.14/auth/login', { Email,  Password}).subscribe(
  //     response => {
        
  //       // Tự lưu vô cookie or local storage nha hehe, nhớ follow github bạn tui: github.com/hongvinhmobile
  //       console.log(response);
  //     });
      
      
  // }

  // getProducts() {
  //   let headers = new HttpHeaders();
  //   let body = {
  //     LoaiHangHoa: "Cơ bản",
  //     LoaiVanChuyen: "Bình thường",
  //     GiaKm: "5000",
  //     GiaKg: "1000"
  //   }
  //   headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.NjA4NmRkYmM0NDAzNjYyNWYwYzM4Y2Ew.bdOswdUuC9jpmUW6erX3SoGGkC7Avz7hOAMh-6YJGSk');
  //   this.httpClient.post<any>('http://54.255.93.14:3000/enterprises/create-shipping-package', body, { headers: headers }).subscribe(
  //     response => {
  //       console.log(response.data);
  //     });
  // }

  
}
