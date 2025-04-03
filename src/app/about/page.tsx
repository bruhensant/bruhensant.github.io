"use client";

import { useLanguage } from "@/contexts/language-context";
import { common } from "../../../public/i18n/common";

export default function About() {
	const { language } = useLanguage();

	return (
		<div className="flex flex-col gap-4">
			<div className="text-darker dark:text-light max-w-lg text-2xl">
				{common[language].about_me}
			</div>
			<div className="text-dark dark:text-dark">{common[language].current}</div>
		</div>
	);
}
