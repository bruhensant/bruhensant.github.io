import Link from "next/link";

/**
 * @description Text button component
 * @export
 * @param text - text
 * @param link - link
 * @return {JSX.Element}
 */
export default function TextButton({ text, link }: { text: string, link: string }) {
	return (
		<Link href={link} className="text-dark w-fit
			hover:text-darker hover:cursor-pointer
			dark:text-dark dark:hover:text-light border leading-none">
			{text}
		</Link>
	)
}