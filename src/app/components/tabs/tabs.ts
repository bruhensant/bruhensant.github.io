import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'tabs',
	imports: [],
	templateUrl: './tabs.html',
})
export class Tabs {
	router = inject(Router);
	activeTab = signal<'projects'| 'experiences'| 'skills'>('projects');

	tabs: Array<{ id: 'projects'| 'experiences'| 'skills'; label: string }> = [
		{ id: 'projects', label: 'Projects' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'experiences', label: 'Experience' },
	];

	navigate(id: 'projects'| 'experiences'| 'skills'): void {
		this.activeTab.set(id);
		this.router.navigate([id]);
	}
}
