import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
preguntas = [
  {no: 1, pregunta: '¿Cuál ',categoria:"",correo:"",fecha:"",id:""},
]
newP= {categoria:"", pregunta:""}

constructor(private api: ApiRestService){}

ngOnInit():void{
  this.consulta()
}

consulta(){
  this.api.getAllPreguntas().subscribe({
    next: datos => {
      console.log(datos.documents)
      let i =1;
      this.preguntas = datos.documents.map((p: any) => ({
        no: i++,
        pregunta: p.fields.pregunta.stringValue,
        categoria: p.fields.categoria,
        correo: p.fields.correo.stringValue,
        fecha: p.fields.fecha.timestampValue,
        id: p.name.split("/").pop()
      }))
      console.log(this.preguntas)
    },
    error: e =>{}
    })
  }

  crearPregunta(){
    const correo = localStorage.getItem("correo") || ""
    const fecha = new Date().toISOString();
     this.api.createPregunta(this.newP.categoria, correo,this.newP.pregunta, fecha).subscribe({
      next: resp => {this.consulta()},
      error: e => {console.log(e)}
     })
  }
}
