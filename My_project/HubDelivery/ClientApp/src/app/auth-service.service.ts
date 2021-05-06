import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable(
  
)
export class AuthServiceService {

  constructor( private http:HttpClient) { }
login(data):Observable<any>{
  console.log("I am server");
  return this.http.post(`http://54.255.93.14/auth/login`, data);
}
}
 