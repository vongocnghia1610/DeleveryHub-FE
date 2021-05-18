import { Component, OnInit, OnDestroy} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import{FormGroup} from'@angular/forms';
import {Observable,} from 'rxjs';
import {  ActivatedRoute , Router} from '@angular/router';
import { ElementRef, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
export class Link{
  constructor(
    public link:string
  
  )
  {}
}
@Component({
  selector: 'app-profile-doanhnghiep',
  templateUrl: './profile-doanhnghiep.component.html',
  styleUrls: ['./profile-doanhnghiep.component.css']
})



export class ProfileDoanhnghiepComponent implements OnInit {
formGroup:FormGroup
a=[]
array=[]
link:Link[]
loading: boolean = false;
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('fileInput') fileInputdoc: ElementRef;

  doc: File;
  logo: File;
  onFileChangelogo(e: File[]) {
    this.logo = <File>e[0];
    console.log(this.logo);
  }
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.formGroup= new FormGroup({
      TenDoanhNghiep : new FormControl(),
      DiaChi : new FormControl(),
      SoDienThoai: new FormControl(),
      Logo :new FormControl(),
     

    })
    this.getdata()
  }
 getdata(){
  this.currentData().subscribe(data=>
    { 
     this.array=Object.entries(data)
        this.array=Object.entries(this.array[0][1])
        console.log(this.array)
     
      this.formGroup= new FormGroup({
        TenDoanhNghiep : new FormControl(this.array[6][1]),
        DiaChi : new FormControl(this.array[8][1]),
        SoDienThoai: new FormControl(this.array[9][1]),
       Logo: new FormControl(),

      })

     console.log(this.array[0][1])
     this.link=this.array[0][1]
     console.log(this.link)
     return this.link
    })
    
 }
  
    
    
         
         
      
  
  currentData()
  {
   
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);

 return this.http.get(`http://54.255.93.14/me/information`, {headers:headers});

  
  }
  private prepareSave(): any {
    let input = new FormData();
    // This can be done a lot prettier; for example automatically assigning values by looping through `this.form.controls`, but we'll keep it as simple as possible here
   
    if(this.logo!=null)
    {
    input.append('logo', this.logo, this.logo.name);
    }
    input.append('TenDoanhNghiep', this.formGroup.get('TenDoanhNghiep').value);
    input.append('SoDienThoai', this.formGroup.get('SoDienThoai').value);
    input.append('DiaChi', this.formGroup.get('DiaChi').value);
  

    return input;
  }
  updatedoanhnghiepProces(){
      if (this.formGroup.valid){
       
     
        this.loading = true;
        let headers= new HttpHeaders();
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser.token; // your token
        console.log(token);
        headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
        this.http.put(`http:///54.255.93.14/me/edit-profile-enterprise`, this.prepareSave(), {headers:headers}) .subscribe(result=>
        {
          console.log(this.prepareSave());
          console.log(result);

          alert("Đăng kí thành công");
this.getdata();
        },error=>{
          alert("Lỗi update");
        }
        );

        setTimeout(() => {
          this.loading = false;
        }, 1000);
      
      

     
      }
    
  
    else alert("Bạn chưa nhập đầy đủ thông tin");
      
  }
  
  // update(data):Observable<any>{
  
  //   let headers= new HttpHeaders();
  //   var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   var token = currentUser.token; // your token
  //   console.log(token);
  //   headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    
        
  //       return this.http.put(`http://54.255.93.14/me/edit-profile-enterprise`, data, {headers:headers});
  //     }
      
     
  //       editprofile(){
    
  //         if (this.formGroup.valid){
  //         this.update(this.formGroup.value).subscribe((result) =>{
           
            
  //           if(result)
  //            console.log( result);
            
  //            alert("Update thành công");
      
  //         });
    
  //       }
      
  //       else alert("Bạn chưa nhập đầy đủ thông tin");
      
  //     }
      changepass(){
        this.router.navigate(['./changepassword'])
      }


}
