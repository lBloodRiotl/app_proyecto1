import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  nombre: string = ""
  password: string = ""


  constructor() { }

  ngOnInit() {
  }


  iniciarSesion()
  {

    console.log("nombre" + this.nombre)
    console.log("password" + this.password)
  
  }

  



}
