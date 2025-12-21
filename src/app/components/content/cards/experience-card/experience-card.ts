import type { Experience } from '@/app/shared/types/types';
import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
	selector: 'experience-card',
	imports: [DatePipe],
	templateUrl: './experience-card.html',
})
export class ExperienceCard {
	experience = input.required<Experience>();
}
