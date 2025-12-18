import { Header } from '@/app/components/header/header';
import { Tabs } from '@/app/components/tabs/tabs';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'home',
	imports: [Header, Tabs, RouterOutlet],
	templateUrl: './home.html',
})
export class Home {}
