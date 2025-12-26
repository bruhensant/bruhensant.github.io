import type { Project } from '@/app/shared/types/types';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
	selector: 'project-card',
	imports: [],
	templateUrl: './project-card.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
	project = input.required<Project>();
}
