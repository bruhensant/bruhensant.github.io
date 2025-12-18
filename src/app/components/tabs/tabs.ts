import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'tabs',
	imports: [RouterLink],
	templateUrl: './tabs.html',
})
export class Tabs {
	tabs: Array<{ id: string; label: string }> = [
		{ id: 'projects', label: 'Projects' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'experience', label: 'Experience' },
	];
}
