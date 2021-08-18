import axios from "axios";
import { createContext, FC, useCallback, useEffect, useState } from "react";

export interface AuthContextState {
	user: User | null;
	register: (v: FormValues) => void;
	login: (v: FormValues) => void;
}

export const AuthContext = createContext({} as AuthContextState);

export const AuthProvider: FC = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	const register = useCallback(async (values: FormValues) => {
		axios.post("http://localhost:8000/auth/register", values).then((res) => setUser(res.data));
	}, []);

	const login = useCallback(async (values?: FormValues) => {
		axios.post("http://localhost:8000/auth/login", values).then((res) => setUser(res.data));
	}, []);

	useEffect(() => {
		login({ email: "toheebeji@gmail.com", password: "twilight123" });
	}, [login]);

	return <AuthContext.Provider value={{ user, register, login }}>{children}</AuthContext.Provider>;
};
