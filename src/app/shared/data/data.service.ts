import { Injectable } from '@angular/core';
import { projects } from './data';
import type { Project } from '@/app/shared/types/types';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	allProjects: Array<Project> = projects;

	getProject(id: string): Project {
		const project = this.allProjects.find((project) => project.id === id);
		if (!project) {
			throw new Error(`Project with id ${id} not found`);
		}

		return project;
	}

	getAllProjects(): Array<Project> {
		return this.allProjects;
	}

	getPreRenderProjects() {
		return this.allProjects.map((project) => {
			return { projectId: project.id };
		});
	}
}
