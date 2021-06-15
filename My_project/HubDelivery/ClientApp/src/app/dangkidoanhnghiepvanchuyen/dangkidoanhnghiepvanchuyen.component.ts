
import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import { from } from 'rxjs/observable/from';
import{FormGroup} from'@angular/forms';
import {Observable} from 'rxjs';
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router';
import { ElementRef, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-dangkidoanhnghiepvanchuyen',
  templateUrl: './dangkidoanhnghiepvanchuyen.component.html',
  styleUrls: ['./dangkidoanhnghiepvanchuyen.component.css']
})
export class DangkidoanhnghiepvanchuyenComponent implements OnInit {
  
  formGroup : FormGroup;
  loading: boolean = false;
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('fileInput') fileInputdoc: ElementRef;

  doc: File;
  logo: File;

  constructor(private http:HttpClient,
    private router:Router,private fb: FormBuilder) { }
  ngOnInit() {
    // this.createForm();
    this.initForm()
    this.createForm()
  }
 
    
  createForm() {
    this.formGroup = this.fb.group({
      logo: null,
      doc: null,
      Email: ['', Validators.required],
      TenDoanhNghiep: ['', Validators.required],
     
      SoDienThoai: ['', Validators.required],
      DiaChi:['', Validators.required],
      Password:['', Validators.required],
     
      CheckBox: ['', Validators.required],
    });
  }
    
  initForm(){
    this.formGroup= new FormGroup({
      TenDoanhNghiep: new FormControl("",[ Validators.required]),
      logo: new FormControl("",[ Validators.required]), 
      doc: new FormControl("",[ Validators.required]), 
      SoDienThoai: new FormControl("",[ Validators.required]),  
      Email: new FormControl("",[ Validators.required]),
      Password: new FormControl("",[ Validators.required]),
      DiaChi: new FormControl("",[ Validators.required]),
      CheckBox: new FormControl("",[ Validators.required]),
   
    }); 

  }
  onFileChangedoc(e: File[]) {
    this.doc = <File>e[0];
    console.log(this.doc);
  }
  onFileChangelogo(e: File[]) {
    this.logo = <File>e[0];
    console.log(this.logo);
  }
  private prepareSave(): any {
    let input = new FormData();
    // This can be done a lot prettier; for example automatically assigning values by looping through `this.form.controls`, but we'll keep it as simple as possible here
    input.append('doc', this.doc, this.doc.name);
    input.append('logo', this.logo, this.logo.name);
    input.append('Email', this.formGroup.get('Email').value);
    input.append('TenDoanhNghiep', this.formGroup.get('TenDoanhNghiep').value);
    input.append('SoDienThoai', this.formGroup.get('SoDienThoai').value);
    input.append('DiaChi', this.formGroup.get('DiaChi').value);
    input.append('Password', this.formGroup.get('Password').value);

    return input;
  }
    dangkidoanhnghiepProces(){
      if (this.formGroup.valid){
        // const formModel = this.prepareSave();
        // console.log(this.formGroup.value);
     
        this.loading = true;

        this.http.post(`http:///54.255.93.14/auth/register-doanhnghiep`, this.prepareSave()) .subscribe(result=>
        {
          console.log(this.prepareSave());
          console.log(result);
          alert("Đăng kí thành công");
        },error=>{
          alert("Email này đã được sử dung");
        }
        );

        setTimeout(() => {
          this.loading = false;
        }, 1000);
      
        // console.log(this.formGroup);
        // console.log("I am server");
        // let headers= new HttpHeaders();
        
      
        // headers = headers.set('Content-Type', 'multipart/form-data').set('Accept','application/json' );
      // this.http.post(`https://be-b010.herokuapp.com/auth/register-doanhnghiep`,this.formGroup.value, {headers:headers}).subscribe((result) =>{
      
      //   if(result)
      //    console.log( result);
      //    alert("thành công");
       
          
          
        

      // });

     
      }
    
  
    else alert("Bạn chưa nhập đầy đủ thông tin");
      
  }
  
     
    
    
}
