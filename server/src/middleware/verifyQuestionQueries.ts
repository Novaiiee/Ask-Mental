import { NextFunction, Request, Response } from "express";
import joi from "joi";

const CreateQuestionSchema = joi.object({
	content: joi.string().required().min(10),
	createdAt: joi.string().required(),
});

const AnswerQuestionSchema = joi.object({
	questionID: joi.string().required(),
	createdAt: joi.string().required(),
	content: joi.string().required(),
});

export function verifyCreateQuestion(req: Request, res: Response, next: NextFunction) {
	const isValidated = CreateQuestionSchema.validate(req.body);
	if (!isValidated) return res.status(400).send({ error: "Not all data provided" });

	next();
}

export function verifyAnswerQuestion(req: Request, res: Response, next: NextFunction) {
	const isValidated = AnswerQuestionSchema.validate(req.body);
	if (!isValidated) return res.status(400).send({ error: "Not all data provided" });

	next();
}
