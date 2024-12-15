import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({ providedIn: 'root', })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean {
        console.log('canactivate')
        if (this.authService.isAuthenticated) { 
            return true; 
        }
        else {
            this.router.navigate(['']); return false;
        }
    }
}