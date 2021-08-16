interface User {
	name: string;
	id: string;
	email: string;
	questions: string[];
}

interface Answer {
	id: string;
	username: string;
	createdAt: string;
	content: string;
}

interface Question extends Answer {
	answers: Answer[];
}

interface FormValues {
	email: string;
	password: string;
	name?: string;
}
