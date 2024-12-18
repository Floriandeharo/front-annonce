import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, MenubarModule],
  standalone: true // Ajoutez cette ligne pour le rendre autonome
})
export class AppComponent {
  title = 'front-appu';
  token: string | null = localStorage.getItem('token');

  items = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]
}
