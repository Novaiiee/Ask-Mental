import mongoose, { Document, Schema } from "mongoose";

export interface UserDocument extends Document {
	name: string;
	email: string;
	password: string;
	questions: string[];
	id: string;
}

const UserSchema = new Schema<UserDocument>({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	questions: [String],
	id: { type: String, required: true },
});

export const UserModel = mongoose.model<UserDocument>("ask-mental-user", UserSchema);
