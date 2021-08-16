import { NextFunction, Request, Response } from "express";
import joi from "joi";

const RegisterSchema = joi.object({
	name: joi.string().required().min(3),
	email: joi.string().required().email(),
	password: joi.string().required().min(6),
});

const LoginSchema = joi.object({
	email: joi.string().required().email(),
	password: joi.string().required().min(6),
});

export function verifyAuthBody(type: "login" | "register") {
	if (type === "register") {
		return (req: Request, res: Response, next: NextFunction) => {
			const isValid = RegisterSchema.validate(req.body);
			if (isValid.error) return res.send({ error: "Email, Password, or Username not provided" });

			next();
		};
	} else {
		return (req: Request, res: Response, next: NextFunction) => {
			if (req.session) return next();

			const isValid = LoginSchema.validate(req.body);
			if (isValid.error) return res.send({ error: "Email or Password not provided" });

			next();
		};
	}
}
