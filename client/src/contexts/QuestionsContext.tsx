import axios from "axios";
import { createContext, FC, useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export interface QuestionsContextState {
	questionsFeed: Question[];
	userQuestions: Question[];
}

export const QuestionsContext = createContext({} as QuestionsContextState);

export const QuestionsProvider: FC = ({ children }) => {
	const [questionsFeed, setQuestionsFeed] = useState<Question[]>([]);
	const [userQuestions, setUserQuestions] = useState<Question[]>([]);

	const { user } = useContext(AuthContext);

	const getQuestions = useCallback(async () => {
		axios.get("http://localhost:8000/questions/my").then((res) => setUserQuestions(res.data));
	}, []);

	useEffect(() => {
		if (user) getQuestions();
	}, [getQuestions, user]);

	return (
		<QuestionsContext.Provider value={{ questionsFeed, userQuestions }}>{children}</QuestionsContext.Provider>
	);
};
