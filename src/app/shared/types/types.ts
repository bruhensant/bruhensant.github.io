export type Base = {
	id: string;
};

export type Project = Base & {
	title: string;
	description: string;
};

export type Experience = Base & {
	role: string;
	company: Company;
	start: Date;
	end?: Date;
	description: string;
	feats?: Feat[];
};

export type Company = Base & {
	name: string;
	webpage?: string;
};

export type Feat = Base & {
	content: string;
	link?: string;
};

export type Skill = Base & {
	name: string;
	url: string;
};
