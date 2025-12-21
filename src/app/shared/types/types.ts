export type Base = {
	id: string;
};

export type Project = Base & {
	title: string;
	description: string;
};

export type Experience = Base & {
	role: string;
	company: string;
	start: Date;
	end?: Date;
	description: string;
};

export type Skill = Base & {
	name: string;
	url: string;
}