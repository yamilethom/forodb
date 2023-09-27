import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRestService } from '../api-rest.service';
import { ToastrService } from 'ngx-toastr';

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
  constructor(
    private router: Router, 
    private api: ApiRestService,
    private msg: ToastrService
    ){}
  login(){
    this.showLoading = true
    this.api.login(this.email, this.pass).subscribe({
      next: respuesta => {
        this.msg.success("Bienvenido al foro")
        localStorage.setItem("correo", this.email);
        this.router.navigate(['/home']);
      },
      error: problemilla => {
        this.msg.error("Error en el usuario o contraseña")
        this.showLoading = false
        this.showError = true

      }
    })
     
  }
}
