import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    console.log('login LoginComponent')

    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('response', response)
        this.authService.setToken(response.bearer); // Sauvegarder le token retourné par le backend
        this.router.navigate(['/home']); // Rediriger après connexion
      },
      error: (error) => {
        this.errorMessage = 'Email ou mot de passe incorrect';
        console.error('Erreur lors de la connexion', error);
      },
    });
  }
}
