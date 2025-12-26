import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectCard } from '../../cards/project-card/project-card';
import type { Project } from '@/app/shared/types/types';
import { DataService } from '@/app/shared/data/data.service';

@Component({
	selector: 'projects',
	imports: [ProjectCard],
	templateUrl: './projects.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
	projects: Array<Project> = inject(DataService).getAllProjects();
}
