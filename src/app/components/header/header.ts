import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinkedinIcon } from '../icons/linkedin-icon/linkedin-icon';
import { GithubIcon } from '../icons/github-icon/github-icon';
import { ThemeToggle } from './theme-toggle/theme-toggle.component';

@Component({
	selector: 'header',
	imports: [LinkedinIcon, GithubIcon, ThemeToggle],
	templateUrl: './header.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
