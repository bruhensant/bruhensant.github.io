import { RenderMode, type ServerRoute } from '@angular/ssr';
import { projects } from 'public/projects';

export const serverRoutes: ServerRoute[] = [
	{
		path: '**',
		renderMode: RenderMode.Server,
	},
	{
		path: 'projects/:projectId',
		renderMode: RenderMode.Prerender,
		getPrerenderParams: async () => {
			return projects.map((project) => {
				return { projectId: project.id };
			});
		},
	},
];
