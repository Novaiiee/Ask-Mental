import { hash } from "bcrypt";
import { NextFunction, Request, Response, Router } from "express";
import passport from "passport";
import { v4 } from "uuid";
import { verifyAuthBody } from "../middleware/verifyAuthBody";
import { UserModel } from "../models/user.model";

const router = Router();

router.post(
	"/register",
	verifyAuthBody("register"),
	async (req: Request, res: Response, next: NextFunction) => {
		const doesUserExist = await UserModel.findOne({ email: req.body.email });
		if (doesUserExist) return res.status(300).send({ error: "User already exists" });

		try {
			const user = await UserModel.create({
				...req.body,
				id: v4(),
				password: await hash(req.body.password, 12),
				questions: [],
			});

			req.user = user;
			next();
		} catch (err) {
			res.status(500).send({ error: err.message });
		}
	},
	passport.authenticate("local"),
	(req: Request, res: Response) => res.status(201).send(req.user)
);

router.post("/login", verifyAuthBody("login"), passport.authenticate("local"), (req, res) => {
	res.status(200).send(req.user);
});

export { router as authRoute };
