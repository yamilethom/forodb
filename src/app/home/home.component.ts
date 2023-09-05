import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
preguntas = [
  {id: 1, pregunta: '¿Cuál es la capital de Francia?'},
  {id: 2, pregunta: '¿Cuál es la capital de España?'},
  {id: 3, pregunta: '¿Cuál es la capital de Italia?'},
  {id: 4, pregunta: '¿Cuál es la capital de Portugal?'},
]

}
