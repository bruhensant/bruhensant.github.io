import Link from "next/link";

export default function HeaderLinkButton({ text, link, active = false, onClick, block = false }: { text: string, link: string, active: boolean, onClick: () => void, block?: boolean }) {
	return (
		<Link href={link} onClick={onClick} className={`
			${block ? 'cursor-not-allowed text-dark hover:text-dark' : ''}
			${active ? 'underline underline-offset-8 text-darker dark:text-light' : ''}
			text-dark w-fit rounded-md p-2 leading-none transition-all
			hover:text-darker
			dark:text-dark dark:hover:text-light dark:focus:text-light dark:focus:ring-light
			focus:outline-none focus:ring focus:ring-darker
			`}>
			{text}
		</Link>
	)
}
