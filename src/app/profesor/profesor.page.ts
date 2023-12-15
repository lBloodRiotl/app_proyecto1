import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

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
