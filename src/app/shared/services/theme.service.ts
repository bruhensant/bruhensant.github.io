import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	private readonly document = inject(DOCUMENT);
	private readonly STORAGE_KEY = 'theme';

	readonly theme = signal<Theme>(this.getInitialTheme());
	readonly isDarkMode = computed(() => this.theme() === 'dark');

	constructor() {
		this.applyTheme(this.theme());
	}

	toggleTheme(): void {
		const newTheme: Theme = this.theme() === 'dark' ? 'light' : 'dark';
		this.setTheme(newTheme);
	}

	setTheme(newTheme: Theme): void {
		this.theme.set(newTheme);
		this.applyTheme(newTheme);
		try {
			localStorage.setItem(this.STORAGE_KEY, newTheme);
		} catch {
			// localStorage might be unavailable in restricted environments
		}
	}

	private getInitialTheme(): Theme {
		try {
			const saved = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
			if (saved === 'light' || saved === 'dark') {
				return saved;
			}
		} catch {
			// Ignore localStorage read errors
		}

		if (
			typeof window !== 'undefined' &&
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			return 'dark';
		}

		return 'light';
	}

	private applyTheme(theme: Theme): void {
		const root = this.document.documentElement;
		if (theme === 'dark') {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
	}
}
