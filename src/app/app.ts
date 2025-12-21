import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet],
	templateUrl: './app.html',
	host: {
		'(document:mousemove)': 'onMouseMove($event)',
	},
})
export class App {
	private readonly document = inject(DOCUMENT);

	onMouseMove(event: MouseEvent) {
		this.document.body.style.setProperty(
			'--cursor-x',
			`${event.clientX}px`,
		);
		this.document.body.style.setProperty(
			'--cursor-y',
			`${event.clientY}px`,
		);
	}
}
