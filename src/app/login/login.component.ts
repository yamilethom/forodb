import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = ""
  pass = ""
  showError = false
  showLoading = false
  constructor(private router: Router, private api: ApiRestService){}
  login(){
    this.showLoading = true
    this.api.login(this.email, this.pass).subscribe({
      next: respuesta => {
        localStorage.setItem("correo", this.email);
        this.router.navigate(['/home']);
      },
      error: problemilla => {
        this.showLoading = false
        this.showError = true

      }
    })
     
  }
}
