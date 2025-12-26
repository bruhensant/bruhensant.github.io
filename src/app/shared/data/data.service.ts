import { Injectable } from '@angular/core';
import { projects, experiences, skills } from './data';
import type { Experience, Project, Skill } from '@/app/shared/types/types';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	allProjects: Array<Project> = projects;
	allExperiences: Array<Experience> = experiences;
	allSkills: Array<Skill> = skills;

	getProject(id: string): Project {
		const project = this.allProjects.find((project) => project.id === id);
		if (!project) {
			throw new Error(`Project ${id} not found`);
		}

		return project;
	}

	getAllProjects(): Array<Project> {
		return this.allProjects;
	}

	getAllExperiences(): Array<Experience> {
		return this.allExperiences.sort((experienceA, experienceB) => {
			return experienceB.start.getTime() - experienceA.start.getTime();
		});
	}

	getAllSkills(): Array<Skill> {
		return this.allSkills;
	}

	getPreRenderProjects() {
		return this.allProjects.map((project) => {
			return { projectId: project.id };
		});
	}
}
