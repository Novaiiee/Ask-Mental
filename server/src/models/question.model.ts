import mongoose, { Document, Schema } from "mongoose";

interface Answer extends Document {
	userID: string;
	id: string;
	username: string;
	content: string;
	createdAt: string;
}

interface QuestionDocument extends Answer {
	answers: Answer[];
}

const QuestionSchema = new Schema<QuestionDocument>({
	userID: { type: String, required: true },
	id: { type: String, required: true },
	username: { type: String, required: true },
	content: { type: String, required: true },
	createdAt: { type: String, required: true },
	answers: [
		{
			userID: { type: String, required: true },
			id: { type: String, required: true },
			username: { type: String, required: true },
			content: { type: String, required: true },
			createdAt: { type: String, required: true },
		},
	],
});

export const QuestionModel = mongoose.model<QuestionDocument>("ask-mental-questions", QuestionSchema);
