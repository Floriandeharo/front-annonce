import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api'; // URL de votre backend

  constructor(private http: HttpClient) {}

  // Méthode pour se connecter
  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    console.log('Username:', username);
    console.log('Password:', password);

    return this.http.post<any>(
      `${this.apiUrl}/connexion`,
      {username: username,password}, // Correspond aux champs du backend
      { headers }
    );
  }


  // Enregistrer le token JWT dans le localStorage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Récupérer le token JWT
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Supprimer le token (déconnexion)
  logout(): void {
    localStorage.removeItem('token');
  }

  // Vérifie si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Retourne vrai si le token existe
  }
}
