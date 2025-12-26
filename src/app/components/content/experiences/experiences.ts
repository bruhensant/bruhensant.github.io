import { DataService } from '@/app/shared/data/data.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import type { Experience } from '@/app/shared/types/types';
import { ExperienceCard } from '../../cards/experience-card/experience-card';

@Component({
	selector: 'experiences',
	imports: [ExperienceCard],
	templateUrl: './experiences.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experiences {
	experiences: Array<Experience> = inject(DataService).getAllExperiences();
}
