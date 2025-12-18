import { Header } from '@/app/components/header/header';
import { Tabs } from '@/app/components/tabs/tabs';
import { Component, inject, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'home',
	imports: [Header, Tabs, RouterOutlet],
	templateUrl: './home.html',
})
export class Home implements OnInit {
	route = inject(ActivatedRoute);

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			console.warn(params);
		});
	}
}
