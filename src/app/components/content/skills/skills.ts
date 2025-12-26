import { DataService } from '@/app/shared/data/data.service';
import type { Skill } from '@/app/shared/types/types';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
	selector: 'skills',
	imports: [],
	templateUrl: './skills.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
	skills: Array<Skill> = inject(DataService).getAllSkills();
}
