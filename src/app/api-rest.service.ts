import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  urlLogin = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQRRKOsKRuxWU5jNXleKaTyT3EigWkK7g";
  urlRegister = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQRRKOsKRuxWU5jNXleKaTyT3EigWkK7g";
  constructor(private http: HttpClient) { }

  login(email: string, pass: string){
    return this.http.post(this.urlLogin, {email:email,password:pass,returnSecureToken:true})
  }

  register(email: string, pass: string){
    return this.http.post(this.urlRegister, {email:email,password:pass,returnSecureToken:true})
  }
  
}
