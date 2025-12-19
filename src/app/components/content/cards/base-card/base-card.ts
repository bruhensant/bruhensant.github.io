import type { Project } from '@/app/shared/types/types';
import { Component, input } from '@angular/core';

@Component({
	selector: 'base-card',
	imports: [],
	templateUrl: './base-card.html',
})
export class BaseCard {
	project = input<Project>();
}
