'use client'
import { common } from "../../../public/i18n/common";
import TextLinkButton from "../text-link-button/text-link-button-component";
import { useLanguage } from "@/contexts/language-context";


export default function Footer() {
	const { language } = useLanguage();

	return (
		<footer className="flex justify-between pb-30">
			<TextLinkButton text="github" link="https://github.com/bruhensant	" />
			<TextLinkButton text="linkedin" link="https://www.linkedin.com/in/bruhensant/" />
			<TextLinkButton text="behance" link="https://www.behance.net/bruhensant" />
			<TextLinkButton text={`${common[language].resume}.pdf`} link="/resume.pdf" />
		</footer>
	)
}
