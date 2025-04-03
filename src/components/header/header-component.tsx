'use client'

import HeaderLinkButton from "../header-link-button/header-link-button-component";
import { common } from "../../../public/i18n/common";
import { useLanguage, useSwitchLanguage } from "@/contexts/language-context";
import { useNavigation } from "@/contexts/navigation-context";

export default function Header() {
	const { language } = useLanguage();
	const switchLanguage = useSwitchLanguage();
	const { activeButton, setActiveButton } = useNavigation();

	return (
		<div className="flex justify-between">
			<HeaderLinkButton aria-label={common[language].home} text="bruhensant" link="/" active={activeButton === 'home'} onClick={() => setActiveButton('home')} />

			<div className="flex gap-10">
				<HeaderLinkButton aria-label={common[language].about} text={common[language].about} link="/about" active={activeButton === 'about'} onClick={() => setActiveButton('about')} />
				<HeaderLinkButton aria-label={common[language].language} text={common[language].language} link="" active={activeButton === 'language'} onClick={() => switchLanguage()} />
			</div>
		</div>
	)
}
