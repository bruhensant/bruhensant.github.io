import Link from "next/link";

/**
 * @description Text button component
 * @export
 * @param text - text
 * @param link - link
 * @return {JSX.Element}
 */
export default function TextLinkButton({ text, link }: { text: string, link: string }) {
	return (
		<Link href={link} className="text-dark w-fit rounded-md p-2
			hover:text-darker
			dark:text-dark dark:hover:text-light leading-none transition-all
			focus:outline-none focus:ring focus:ring-dark">
			{text}
		</Link>
	)
}
