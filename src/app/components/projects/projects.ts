import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../projects';

@Component({
    selector: 'app-projects',
    imports: [],
    templateUrl: './projects.html',
    styleUrl: './projects.css'
})
export class Projects {

    private projectsService = inject(ProjectsService);

    projetos = this.projectsService.getProjetos();

}