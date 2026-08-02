import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
	selector: 'theme-toggle',
	imports: [],
	templateUrl: './theme-toggle.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'flex items-center',
	},
})

export class ThemeToggle {
	protected readonly themeService = inject(ThemeService);
}
