import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/api/projects'; // URL de votre backend
authService

constructor(private http: HttpClient, authService: AuthService) {
  this.authService = authService;
 }

getProjects(): Observable<Project[]> {
  const project: Observable<Project[]> = this.http.get<Project[]>(this.apiUrl);
  console.log("project", project);
  return project;
}


getAllProjects(page: number): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  // Ajoutez des paramètres de pagination à la requête
  const params = {
    pageable: page.toString(),
  };
  console.log("this.authService.getToken()  ",this.authService.getToken());
  return this.http.get<any>(this.apiUrl, { params }  );

}


}
