import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'tabs',
	imports: [],
	templateUrl: './tabs.html',
})
export class Tabs {
	router = inject(Router);
	activeTab = signal<string>('projects');

	tabs: Array<{ id: string; label: string }> = [
		{ id: 'projects', label: 'Projects' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'experience', label: 'Experience' },
	];

	navigate(id: string): void {
		this.activeTab.set(id);
		this.router.navigate([id]);
	}
}
