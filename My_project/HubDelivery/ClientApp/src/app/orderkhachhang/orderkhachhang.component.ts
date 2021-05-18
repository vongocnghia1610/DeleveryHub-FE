import { Component, OnInit, Inject, ApplicationModule} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams , HttpRequest} from '@angular/common/http';
import {} from '@angular/common'

import{Router} from '@angular/router'

@Component({
  selector: 'app-orderkhachhang',
  templateUrl: './orderkhachhang.component.html',
  styleUrls: ['./orderkhachhang.component.css']
})
export class OrderkhachhangComponent implements OnInit {

  array:any=[]
  message=[]
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
   this.getdata();
    
  }
  getdata(){
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    
    
   this.http.get(`http://54.255.93.14/enterprises/show-order-by-customers`, {headers:headers}).subscribe((res)=>

    {
    
 
     this.array=Object.entries(res)
     this.array=Object.values(this.array[0][1])
     console.log(this.array);
    return this.array;
    

     
    });
  }
  
  delivered(j){
  
    let headers= new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    let data=
        {
          idDonHang:j
        }
        
    //     this.http.get(`http://54.255.93.14/enterprises/show-order-by-customers`, {headers:headers}).subscribe((res)=>

    // {
    
 
    //  this.array=Object.entries(res)
    //  this.array=Object.values(this.array[0][1])
    //  this.message=Object.entries(this.array)
    //  console.log(this.array);

    

     
    // });
    
    this.currentData(j).subscribe(data=>
      {
       this.array=Object.entries(data)
          this.array=Object.values(this.array[0][1])
        this.message= this.array.find(x => x._id === j);
        this.message=Object.entries(this.message)
        console.log(this.message)
        let a=
        {
          idDonHang:j
        }
        if(this.message[0][1]=="Đang Giao"){
         
            this.http.put(`http://54.255.93.14/enterprises/update-delivered-order`, a, {headers:headers}).subscribe(data=>{
              this.message=Object.entries(data)

             
              alert("Đang giao ==> Đã giao");
             this.getdata();
            return
          

            });
          }
          if(this.message[0][1]=="Đã Nhận Hàng"){
            alert("Đơn hàng này khách hàng đã nhận rồi");

          }
          if(this.message[0][1]=="Đã Hủy Đơn"){
            alert("Đơn hàng này khách hàng đã hủy rồi");

          }
          if(this.message[0][1]=="Chờ xác nhận"){
            alert("Đơn hàng này chưa được giao,click đã giao hàng để xác nhận");

          }
      })
      
      }
      delivering(j){
  
        let headers= new HttpHeaders();
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser.token; // your token
        console.log(token);
        headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
        let data=
            {
              idDonHang:j
            }
            
        //     this.http.get(`http://54.255.93.14/enterprises/show-order-by-customers`, {headers:headers}).subscribe((res)=>
    
        // {
        
     
        //  this.array=Object.entries(res)
        //  this.array=Object.values(this.array[0][1])
        //  this.message=Object.entries(this.array)
        //  console.log(this.array);
    
        
    
         
        // });
        
        this.currentData(j).subscribe(data=>
          {
           this.array=Object.entries(data)
              this.array=Object.values(this.array[0][1])
            this.message= this.array.find(x => x._id === j);
            this.message=Object.entries(this.message)
            console.log(this.message)
            let a=
            {
              idDonHang:j
            }
            if(this.message[0][1]=="Chờ xác nhận"){
             
                this.http.put(`http://54.255.93.14/enterprises/update-delivering-order`, a, {headers:headers}).subscribe(data=>{
                  this.message=Object.entries(data)
    
                 
                  alert("Chờ xác nhận==> đang giao");
                 this.getdata();
                return
              
    
                });
              }
              if(this.message[0][1]=="Đã Nhận Hàng"){
                alert("Đơn hàng này khách hàng đã nhận rồi");
    
              }
              if(this.message[0][1]=="Đã Hủy Đơn"){
                alert("Đơn hàng này khách hàng đã hủy rồi");
    
              }
              if(this.message[0][1]=="Đang Giao"){
                alert("Đơn hàng này đang trong trạng thái đang giao rồi");
    
              }
          })
          }
      
    
          currentData(id)
          {
           
            let headers= new HttpHeaders();
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            var token = currentUser.token; // your token
            console.log(token);
            headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
            
         return this.http.get(`http://54.255.93.14/enterprises/show-order-by-customers`, {headers:headers});
        
          
          }
 


 
 
}