import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
totalPages: any;

  projectService: ProjectService;
  projects: Project[] = [];
  currentPage: number = 1;
  itemsPerPage!: number ;

  constructor(projectService: ProjectService) {
    this.projectService = projectService;
   }


  ngOnInit(): void {
    this.getProjects(this.currentPage);
  }

  getProjects(page: number) {
    this.projectService.getAllProjects(page).subscribe((projects: any) => {
      console.log("projects", projects);
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
