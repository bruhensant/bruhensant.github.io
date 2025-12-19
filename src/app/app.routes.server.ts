import { RenderMode, type ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
	{
		path: '**',
		renderMode: RenderMode.Server,
	},
	{
		path: 'projects/:projectId',
		renderMode: RenderMode.Prerender,
		getPrerenderParams: async () => {
			return [{ projectId: '1' }, { projectId: '2' }, { projectId: '3' }, { projectId: '4' }];
		},
	},
];
