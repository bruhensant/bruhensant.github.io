import type { Experience, Project, Skill } from '@/app/shared/types/types';

export const projects: Array<Project> = [];

export const experiences: Array<Experience> = [
	{
		id: 'exp-1',
		role: 'Frontend Lead Developer',
		company: {
			id: 'c-1',
			name: 'Automining',
			webpage: 'https://www.automining.com.br/',
		},
		start: new Date('2024-06-01'),
		description:
			'Serving as a technical reference and mentor in Frontend and Design projects, designing systems, architectures, and design patterns.',
		feats: [
			{
				id: 'exp-1-1',
				content:
					'Serving as a technical reference and mentor in Frontend and Design projects, designing systems, architectures, and design patterns.',
			},
			{
				id: 'exp-1-2',
				content:
					'Modeled processes and created technical documentation for users and developers (JSDoc, BPMN, Storybook, Chromatic, Confluence).',
			},
			{
				id: 'exp-1-3',
				content:
					'Developed multiple platforms for business and industry management and automation using Angular and TailwindCSS, leveraging process engines (Camunda, Activiti) with integrations to private ERPs and Enterprise AI Assistants (OpenAI API).',
			},
		],
	},
	{
		id: 'exp-2',
		role: 'Frontend Developer',
		company: {
			id: 'c-2',
			name: 'Automining',
			webpage: 'https://www.automining.com.br/',
		},
		start: new Date('2022-09-01'),
		end: new Date('2024-06-01'),
		description:
			'Developed responsive web systems using Angular and SCSS, featuring reactive dashboards and interactive maps.',
		feats: [
			{
				id: 'exp-2-1',
				content:
					'Developed responsive web systems using Angular and SCSS, featuring reactive dashboards (ApexJS), interactive maps (Google Maps API), and report generation (jsPDF).',
			},
			{
				id: 'exp-2-2',
				content:
					'Structured unit and integration tests with Jest, Karma, and Jasmine.',
			},
			{
				id: 'exp-2-3',
				content:
					'Managed Authorization and Authentication with social login platforms (Keycloak, Microsoft, Firebase).',
			},
		],
	},
	{
		id: 'exp-3',
		role: 'R&D Assistant',
		company: {
			id: 'c-3',
			name: 'Mineração Vale Verde',
			webpage: 'https://vale-verde.com/',
		},
		start: new Date('2021-10-01'),
		end: new Date('2022-09-01'),
		description:
			'Conducted market analysis and resolved problems based on process analysis and modeling.',
		feats: [
			{
				id: 'exp-3-1',
				content:
					'Conducted market analysis for business opportunity discovery processes (BPMN).',
			},
			{
				id: 'exp-3-2',
				content:
					'Resolved problems based on process analysis, modeling, and updates (Camunda).',
			},
			{
				id: 'exp-3-3',
				content:
					'Developed internal web tools for departmental integration (Java, SpringBoot, JSF).',
			},
		],
	},
	{
		id: 'exp-4',
		role: 'UX/UI Designer',
		company: { id: 'c-4', name: "Hephaesthus' Lab" },
		start: new Date('2020-01-01'),
		end: new Date('2020-12-01'),
		description:
			'Analyzed usability and accessibility of web platforms and developed design systems.',
		feats: [
			{
				id: 'exp-4-1',
				content:
					'Analyzed usability and accessibility of web platforms (WCAG Standards).',
			},
			{
				id: 'exp-4-2',
				content:
					'Developed design systems for responsive applications (Figma, Sketch).',
			},
			{
				id: 'exp-4-3',
				content:
					'Performed experimental prototyping for proof-of-concept mockups and developed short-short-term value MVPs (React)',
			},
		],
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
	{ id: 'jsdoc', name: 'JSDoc', url: 'https://jsdoc.app' },
	{ id: 'bpmn', name: 'BPMN', url: 'https://bpmn.io' },
	{ id: 'storybook', name: 'Storybook', url: 'https://storybook.js.org' },
	{ id: '', name: 'Chromatic', url: 'https://www.chromatic.com' },
	{
		id: 'confluece',
		name: 'Confluence',
		url: 'https://www.atlassian.com/software/confluence',
	},
	{ id: 'openai-api', name: 'OpenAI API', url: 'https://openai.com/api/' },
	{ id: '', name: 'Firebase', url: 'https://firebase.google.com' },
	{
		id: 'google-maps-api',
		name: 'Google Maps API',
		url: 'https://developers.google.com/maps',
	},
	{
		id: 'jsppd',
		name: 'jsPDF',
		url: 'https://artskydj.github.io/jsPDF/docs/jsPDF.html',
	},
	{
		id: 'springboot',
		name: 'SpringBoot',
		url: 'https://spring.io/projects/spring-boot',
	},
	{ id: 'jsf', name: 'JSF', url: 'https://jakarta.ee/specifications/faces/' },
	{
		id: 'wcag-standards',
		name: 'WCAG Standards',
		url: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
	},
	{ id: 'sketch', name: 'Sketch', url: 'https://www.sketch.com' },
	{ id: 'camunda', name: 'Camunda', url: 'https://camunda.com' },
	{ id: 'activiti', name: 'Activiti', url: 'https://www.activiti.org' },
	
];
