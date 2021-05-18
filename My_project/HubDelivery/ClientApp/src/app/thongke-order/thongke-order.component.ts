import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams , HttpRequest} from '@angular/common/http';
import {} from '@angular/common'
import { from } from 'rxjs/observable/from';
import{Router} from '@angular/router'

@Component({
  selector: 'app-thongke-order',
  templateUrl: './thongke-order.component.html',
  styleUrls: ['./thongke-order.component.css']
})
export class ThongkeOrderComponent implements OnInit {

 
  array:any=[]
  message=[]
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
   
    
  }
  getdataoneweek(){
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    
    
   this.http.get(`http://54.255.93.14/enterprises/show-order-in-one-week-by-enterprise`, {headers:headers}).subscribe((res)=>

    {
    
 
     this.array=Object.entries(res)
     this.array=Object.values(this.array[0][1])
     console.log(this.array);
    return this.array;
    

     
    });
  }
  getdatathreemonth(){
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    
    
   this.http.get(`http://54.255.93.14/enterprises/show-order-in-three-month-by-enterprise`, {headers:headers}).subscribe((res)=>

    {
    
 
     this.array=Object.entries(res)
     this.array=Object.values(this.array[0][1])
     console.log(this.array);
    return this.array;
    

     
    });
  }
  getdataoneyear(){
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    
    
   this.http.get(`http://54.255.93.14/enterprises/show-order-in-one-year-by-enterprise`, {headers:headers}).subscribe((res)=>

    {
    
 
     this.array=Object.entries(res)
     this.array=Object.values(this.array[0][1])
     console.log(this.array);
    return this.array;
    

     
    });
  }
  clickonew(){    
  return this.message=["Thống kê order của một tuần"]  
  }    
  clickthreem(){    
     return this.message=["Thống kê order của ba tháng"]  
   }    
   clickoney(){    
     return this.message=["Thống kê order của một năm"]  
   }    
 
}