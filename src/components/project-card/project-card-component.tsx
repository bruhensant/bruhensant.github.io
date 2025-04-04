export default function ProjectCardComponent({ title }: { title: string }) {
    return (
		<div className="flex flex-col gap-2 hover:cursor-pointer hover:brightness-125 transition-all w-fit h-fit">

        	<div className="bg-dark dark:bg-dark h-64 w-96 rounded-md">

        	</div>
			<span className="text-dark dark:text-light uppercase text-xs leading-none">{title}</span>
		</div>
    )
}