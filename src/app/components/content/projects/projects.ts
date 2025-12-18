import { Component } from '@angular/core';
import { BaseCard } from '../cards/base-card/base-card';
import type { Project } from '@/app/types/types';
import { projects } from '../../../../../public/projects';

@Component({
	selector: 'projects',
	imports: [BaseCard],
	templateUrl: './projects.html',
})
export class Projects {
	projects: Array<Project> = projects;
}
