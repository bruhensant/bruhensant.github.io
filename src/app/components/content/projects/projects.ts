import { Component, inject } from '@angular/core';
import { BaseCard } from '../cards/base-card/base-card';
import type { Project } from '@/app/shared/types/types';
import { DataService } from '@/app/shared/data/data.service';

@Component({
	selector: 'projects',
	imports: [BaseCard],
	templateUrl: './projects.html',
})
export class Projects {
	projects: Array<Project> = inject(DataService).getAllProjects();
}
