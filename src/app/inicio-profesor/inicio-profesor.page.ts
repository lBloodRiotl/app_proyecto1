import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inicio-profesor',
  templateUrl: './inicio-profesor.page.html',
  styleUrls: ['./inicio-profesor.page.scss'],
})
export class InicioProfesorPage implements OnInit {

  constructor(private authService: AuthService) { }

  onLoginClick(usuario: string, pass: string) {
    // Llama al servicio de autenticación con las credenciales proporcionadas
    this.authService.login(usuario, pass);
  }
  ngOnInit() {
  }

}



