import { RenderMode, type ServerRoute } from '@angular/ssr';
import { DataService } from './shared/data/data.service';
import { inject } from '@angular/core';

export const serverRoutes: ServerRoute[] = [
	{
		path: '**',
		renderMode: RenderMode.Server,
	},
	{
		path: 'projects/:projectId',
		renderMode: RenderMode.Prerender,
		getPrerenderParams: async () => {
			const projectsService = inject(DataService);
			return projectsService.getPreRenderProjects();
		},
	},
];
