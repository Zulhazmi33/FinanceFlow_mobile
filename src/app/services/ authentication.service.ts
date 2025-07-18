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
            localStorage.setItem('userID', result.user.uid);
            // const token = await result.user.getIdToken();
            // localStorage.setItem('auth', token);

            await this.router.navigate(['/home']);
        }
        catch (error) {
            console.error('Login error: ',error)
        }
    }

    async logout(): Promise<void> {
        await signOut(this.auth);
        await localStorage.removeItem('userID');
        // await localStorage.removeItem('auth');
    }

    async getCurrentUser() {
        return firstValueFrom(user(this.auth));
    }

}
