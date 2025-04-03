"use client"

import { useState } from "react";
import HeaderLinkButton from "../header-link-button/header-link-button-component";
import { common } from "../../../public/i18n/common";
import { useLanguage, useSwitchLanguage } from "@/contexts/language-context";

export default function Header() {
	const { language } = useLanguage();
	const switchLanguage = useSwitchLanguage();

	const [activeButton, setActiveButton] = useState(0);

const handleButtonClick = (index: number) => {
	if (index === activeButton) return;
	setActiveButton(index);
}


	return (
		<div className="flex justify-between">
			<HeaderLinkButton aria-label={common[language].home} text="bruhensant" link="/" active={activeButton === 0} onClick={() => handleButtonClick(0)} />

			<div className="flex gap-10">
				<HeaderLinkButton aria-label={common[language].about} text={common[language].about} link="/about" active={activeButton === 1} onClick={() => handleButtonClick(1)} />
				<HeaderLinkButton aria-label={common[language].language} text={common[language].language} link="" active={activeButton === 2} onClick={() => switchLanguage()} />
			</div>
		</div>
	)
}
