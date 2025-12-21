import type { Project } from '@/app/shared/types/types';
import { Component, input } from '@angular/core';

@Component({
	selector: 'project-card',
	imports: [],
	templateUrl: './project-card.html',
})
export class ProjectCard {
	project = input.required<Project>();
}
