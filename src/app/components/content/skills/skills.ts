import { DataService } from '@/app/shared/data/data.service';
import type { Skill } from '@/app/shared/types/types';
import { Component, inject } from '@angular/core';

@Component({
	selector: 'skills',
	imports: [],
	templateUrl: './skills.html',
})
export class Skills {
	skills: Array<Skill> = inject(DataService).getAllSkills();
}
