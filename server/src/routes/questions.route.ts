import { Router } from "express";
import passport from "passport";
import shortid from "shortid";
import { verifyCreateQuestion } from "../middleware/verifyQuestionQueries";
import { verifyAnswerQuestion } from "./../middleware/verifyQuestionQueries";
import { QuestionModel } from "./../models/question.model";
import { UserDocument } from "./../models/user.model";

const router = Router();

router.post("/create", passport.authenticate("local"), verifyCreateQuestion, async (req, res) => {
	const { content, createdAt } = req.body;
	const user = req.user as UserDocument;

	const question = await QuestionModel.create({
		answers: [],
		userID: user.id,
		username: user.name,
		content,
		createdAt,
		id: shortid(),
	});

	user.questions = [...user.questions, question.id];
	user.save();

	const newQuestionsList = await (await QuestionModel.find()).reverse();
	res.status(201).send(newQuestionsList);
});

router.put("/answer", passport.authenticate("local"), verifyAnswerQuestion, async (req, res) => {

	const user = req.user as UserDocument;
	const question = await QuestionModel.findOne({ id: req.body.questionID });

	if (!question) return res.status(404).send({ error: "Question not found" });
	if (question.userID === user.id) return res.send();

	question.answers = [...question.answers, {
		...req.body,
		userID: user.id,
		username: user.name,
		id: shortid()
	}]

	return res.status(201).send(await(question.save()));
});

export { router as questionsRoute };
