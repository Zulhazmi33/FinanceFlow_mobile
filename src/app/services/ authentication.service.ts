import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signOut, user } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { signInWithPopup } from 'firebase/auth';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private auth: Auth,
        private router: Router
    ) {}

    async googleLoginPopup(): Promise<void> {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(this.auth, provider);
            const token = await result.user.getIdToken();
            localStorage.setItem('auth_token', token);

            await this.router.navigate(['/home']);
        }
        catch (error) {
            console.error('Login error: ',error)
        }
    }

    async logout(): Promise<void> {
        await signOut(this.auth);
        await localStorage.removeItem('auth_token');
    }

    async getCurrentUser() {
        return firstValueFrom(user(this.auth));
    }

}
