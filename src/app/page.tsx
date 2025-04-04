"use client";

import ProjectCardComponent from "@/components/project-card/project-card-component";
import { common } from "../../public/i18n/common";
import { useLanguage } from "@/contexts/language-context";


export default function Home() {
	const { language } = useLanguage();

	const projects = [
		{
			id: 1,
			title: 'Project 1',
			description: 'Description 1',
		},
		{
			id: 2,
			title: 'Project 2',
			description: 'Description 2',
		},
		{
			id: 3,
			title: 'Project 3',
			description: 'Description 3',
		},
		{
			id: 4,
			title: 'Project 4',
			description: 'Description 4',
		},
		{
			id: 5,
			title: 'Project 5',
			description: 'Description 5',
		},
	]

		// return (
		// 	<div className="grid grid-cols-3 gap-8">
		// 		{projects.map((project) => (
		// 			<ProjectCardComponent key={project.id} title={project.title} />
		// 		))}
		// 	</div>
		// )

		return (
			<div className="text-dark flex gap-2 animate-pulse">
				<span>{common[language].under_development}... </span>
				<span>🚧</span>
			</div>
		)
}
