import connectMongo from "connect-mongodb-session";
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

const MongoStore = connectMongo(session);
const app = express();

mongoose
	.connect(process.env.MONGO ?? "", {
		useCreateIndex: true,
		useFindAndModify: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to DB"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(
	session({
		store: new MongoStore({
			collection: "ask-mental-session",
			uri: process.env.MONGO ?? "",
			expires: 1000 * 60 * 60 * 24,
		}),
		secret: process.env.SESSION_SECRET ?? "",
		cookie: {
			maxAge: 1000 * 60 * 60 * 24,
		},
		resave: true,
		saveUninitialized: false,
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
