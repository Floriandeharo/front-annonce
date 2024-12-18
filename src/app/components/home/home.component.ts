import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ CommonModule, RouterModule,FormsModule ] // Ajoutez ici les modules nécessaires pour ce composant

})
export class HomeComponent implements OnInit {
totalPages: any;

  projectService: ProjectService;
  projects: Project[] = [];
  currentPage: number = 1;
  itemsPerPage!: number ;
  name_search: string = '';
  criteria: {name: String, type: String} = {name: '', type: ''};
  isInitialLoad: boolean = true;

  constructor(projectService: ProjectService) {
    this.projectService = projectService;
   }


  ngOnInit(): void {
    if (this.isInitialLoad) {
      this.getProjects(this.currentPage); // Charger tous les projets au départ
      this.isInitialLoad = false; // Désactiver le chargement initial après le premier appel
    }
  }

  getProjects(page: number) {
    this.projectService.getAllProjects(page).subscribe((projects: any) => {
      console.log("projects", projects);
      itemsPerPage: projects.numberOfElements;
      this.projects = projects.content;
    });
  }

  getProjectsSearch( page: number) {
    this.projectService.getSearchProjects(this.criteria, page).subscribe((projects: any) => {
      console.log("projects", projects);
      this.currentPage = 1;
      itemsPerPage: projects.numberOfElements;
      this.projects = projects.content;
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getProjects(this.currentPage);
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getProjects(this.currentPage);
    }
  }


}
