// auth.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private authState = new BehaviorSubject(false);

  isAuthenticated() {
    return this.authState.value;
  }

  login(usuario: string, pass: string) {
    const isUsernameValid = this.isValidUsername(usuario);
    const isPasswordValid = this.isValidPassword(pass);

    // Verifica las credenciales preestablecidas
    const isPredefinedCredentialsValid = this.checkPredefinedCredentials(usuario, pass);

    if (isUsernameValid && isPasswordValid && isPredefinedCredentialsValid) {
      this.authState.next(true);
    } else {
      this.authState.next(false);
    }
  }

  private isValidUsername(username: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(username);
  }

  private isValidPassword(password: string): boolean {
    return password.length >= 8;
  }

  private checkPredefinedCredentials(username: string, password: string): boolean {
    // Verifica las credenciales preestablecidas
    return username === 'usuario' && password === '12345678';
  }

  constructor() { }
}
