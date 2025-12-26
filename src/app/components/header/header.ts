import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinkedinIcon } from '../content/icons/linkedin-icon/linkedin-icon';
import { GithubIcon } from '../content/icons/github-icon/github-icon';

@Component({
	selector: 'header',
	imports: [LinkedinIcon, GithubIcon],
	templateUrl: './header.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
