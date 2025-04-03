"use client";

import { common } from "../../public/i18n/common";
import { useLanguage } from "@/contexts/language-context";

export default function Home() {
	const { language } = useLanguage();

	return (
		<div className="text-dark flex gap-2 animate-pulse">
			<span>{common[language].under_development}... </span>
			<span>🚧</span>
		</div>
	);
}
