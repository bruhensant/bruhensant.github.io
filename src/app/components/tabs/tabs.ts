import type { TabItem } from '@/app/shared/types/types';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'tabs',
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './tabs.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tabs {
	readonly tabs: TabItem[] = [
		{ id: 'projects', label: 'Projects' },
		{ id: 'experiences', label: 'Experience' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'about', label: 'About'},
	];
}
