import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root', })
export class AuthService {
    private isLoggedIn: boolean = false;
    login(username: string, password: string): boolean {
        // TO DO hacer logica de validacio
        if (username === 'usuarioGenerico' && password === 'contraseñaGenerica') { 
            this.isLoggedIn = true; 
            return true; }
        return false;
    }
    logout(): void {
        this.isLoggedIn = false;
    }
    get isAuthenticated(): boolean {
        return this.isLoggedIn;
    }

    // <button *ngIf="isLoggedIn">Funcionalidad Protegida</button>  para proteget rutas
}