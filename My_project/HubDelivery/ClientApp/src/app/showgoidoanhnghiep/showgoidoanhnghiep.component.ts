import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams , HttpRequest} from '@angular/common/http';
import {} from '@angular/common'
import { from } from 'rxjs/observable/from';
import{Router} from '@angular/router'
@Component({
  selector: 'app-showgoidoanhnghiep',
  templateUrl: './showgoidoanhnghiep.component.html',
  styleUrls: ['./showgoidoanhnghiep.component.css']
})
export class ShowgoidoanhnghiepComponent implements OnInit {
array:any=[]
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
   
    this.getdata();
  }
  getdata(){
    // let headers= new HttpHeaders();
    // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // var token = currentUser.token; // your token
    // console.log(token);
    // headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    
    
   this.http.get(`http://54.255.93.14/enterprises/show-goidoanhnghiep`).subscribe((res)=>

    {
    
 
     this.array=Object.entries(res)
     this.array=Object.values(this.array[0][1])
     console.log(this.array);
    return this.array;
    

     
    });
  }
  Xoa(j){
     let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    console.log(j);
   let data=
   {
     idGoiDoanhNghiep:j
   }
   
   return this.http.put(`http://54.255.93.14/admin/deleted-goidoanhnghiep`,data,{headers:headers} ).subscribe(
     
    result=>{
      
     this.getdata();
    
  });
  
}
Capnhat(){
  this.router.navigate(['/capnhatgoidoanhnghiep'])
}
taogoidoanhnghiep(){
  this.router.navigate(['./taogoidoanhnghiepadmin'])
}

}
