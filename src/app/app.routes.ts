import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectReadComponent } from './components/project/project-read/project-read.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection par défaut
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'project/:id', component: ProjectReadComponent },
  { path: '**', redirectTo: '/home' }, // Route pour les chemins inconnus

];
