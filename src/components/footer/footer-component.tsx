import TextButton from "../text-button/text-button-component";

export default function Footer() {
	return (
		<div className="grid grid-cols-4 text-dark mt-auto">
			<TextButton text="Home" link="/" />
			<TextButton text="About" link="/about" />
		</div>
	)
}