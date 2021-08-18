import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import passport from "passport";
import { setupPassport } from "./passport";
import { authRoute } from "./routes/auth.route";
import { questionsRoute } from "./routes/questions.route";

const app = express();
const expireDate = 1000 * 60 * 60 * 24;

mongoose
	.connect(process.env.MONGO ?? "", {
		useCreateIndex: true,
		useFindAndModify: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to DB"));

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const store = MongoStore.create({
	collectionName: "ask-mental-session",
	mongoUrl: process.env.MONGO,
	ttl: expireDate,
	autoRemove: "native",
});

app.use(
	session({
		store,
		secret: process.env.SESSION_SECRET ?? "",
		cookie: {
			maxAge: expireDate,
		},
		resave: true,
		saveUninitialized: true,
	})
);

setupPassport();

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);
app.use("/questions", questionsRoute);

app.listen(process.env.PORT || 8000, () => {
	console.log("Server Started");
});
