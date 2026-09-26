import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../projects';
import { ScrollRevealDirective } from '../../directives/scroll-reveal';

@Component({
    selector: 'app-projects',
    imports: [ ScrollRevealDirective ],
    templateUrl: './projects.html',
    styleUrl: './projects.css'
})
export class Projects {

    private projectsService = inject(ProjectsService);

    projetos = this.projectsService.getProjetos();

}