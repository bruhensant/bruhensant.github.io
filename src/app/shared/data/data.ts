import type { Experience, Project, Skill } from '@/app/shared/types/types';

export const projects: Array<Project> = [
	{
		id: '1',
		title: 'Number One',
		description: 'The first project lorem ipsum dolor sit amet',
	},
	{
		id: '2',
		title: 'Number Two',
		description: 'The second project lorem ipsum dolor sit amet',
	},
	{
		id: '3',
		title: 'Number Three',
		description: 'The third project lorem ipsum dolor sit amet',
	},
	{
		id: '4',
		title: 'Number Four',
		description: 'The fourth project lorem ipsum dolor sit amet',
	},
];

export const experiences: Array<Experience> = [
	{
		id: '1',
		role: 'Role 1',
		company: 'Company 1',
		start: new Date(),
		description: 'Description for role 1 lorem ipsum dolor sit amet',
	},
	{
		id: '2',
		role: 'Role 2',
		company: 'Company 2',
		start: new Date(),
		end: new Date(),
		description: 'Description for role 2 lorem ipsum dolor sit amet',
	},
];

export const skills: Array<Skill> = [
	{
		id: '1',
		name: 'Angular',
		url: 'https://angular.dev',
	},
	{
		id: '2',
		name: 'TypeScript',
		url: 'https://www.typescriptlang.org',
	},
	{
		id: '3',
		name: 'JavaScript',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	},
	{
		id: '4',
		name: 'Python',
		url: 'https://www.python.org',
	},
	{
		id: '5',
		name: 'NgRx',
		url: 'https://ngrx.io',
	},
	{
		id: '6',
		name: 'RxJS',
		url: 'https://rxjs.dev',
	},
	{
		id: '7',
		name: 'UX/UI',
		url: '',
	},
	{
		id: '8',
		name: 'CSS',
		url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
	},
	{
		id: '9',
		name: 'HTML',
		url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
	},
	{
		id: '10',
		name: 'Git',
		url: 'https://git-scm.com',
	},
	{
		id: '11',
		name: 'React',
		url: 'https://react.dev',
	},
	{
		id: '12',
		name: 'Java',
		url: 'https://www.java.com',
	},
	{
		id: '13',
		name: 'Jest',
		url: 'https://jestjs.io',
	},
	{
		id: '14',
		name: 'Karma',
		url: 'https://karma-runner.github.io',
	},
	{
		id: '15',
		name: 'Jasmine',
		url: 'https://jasmine.github.io',
	},
	{
		id: '16',
		name: 'Next.js',
		url: 'https://nextjs.org',
	},
	{
		id: '17',
		name: 'Svelte',
		url: 'https://svelte.dev',
	},
	{
		id: '18',
		name: 'Figma',
		url: 'https://www.figma.com',
	},
	{
		id: '19',
		name: 'Project Management',
		url: '',
	},
	{
		id: '20',
		name: 'Team Leadership',
		url: '',
	},
	{
		id: '21',
		name: 'Technical Leadership',
		url: '',
	},
	{
		id: '22',
		name: 'Design',
		url: '',
	},
	{
		id: '23',
		name: 'SASS / SCSS',
		url: 'https://sass-lang.com',
	},
];
