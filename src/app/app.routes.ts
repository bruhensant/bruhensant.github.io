import type { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Experience } from './components/content/experience/experience';
import { Skills } from './components/content/skills/skills';
import { Projects } from './components/content/projects/projects';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
	{
		path: '',
		component: Home,
		children: [
			{
				path: 'projects',
				component: Projects,
				children: [
					{
						path: ':projectId',
						component: ProjectDetail,
					},
				],
			},
			{
				path: 'experience',
				component: Experience,
			},
			{
				path: 'skills',
				component: Skills,
			},
			{
				path: '',
				redirectTo: 'projects',
				pathMatch: 'full',
			},
		],
	},
];
