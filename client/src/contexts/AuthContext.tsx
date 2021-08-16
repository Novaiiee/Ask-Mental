import React, { createContext, FC, useCallback, useEffect, useState } from "react";
import useFetch from "use-http";

export interface AuthContextState {
  user: User | null,
  authError: string;
  register: (v: FormValues) => void;
  login: (v: FormValues) => void;
}

export const AuthContext = createContext({} as AuthContextState);

export const AuthProvider: FC = ({ children }) => {
  const { post, response, error } = useFetch("http://localhost:8000/auth", {
    
  });
	const [user, setUser] = useState<User | null>(null);
	const [authError, setAuthError] = useState("");

	const register = useCallback(
		async (values: FormValues) => {
      const res: User = await post("/register", values);
      
			if (response.ok) setUser(res);
			if (error) setAuthError(error.message);
		},
		[error, post, response]
	);

	const login = useCallback(
    async (values: FormValues) => {
      const res: User = await post("/login", { ...values });
      console.log(res)
      
			if (response.ok) setUser(res);
			if (error) setAuthError(error.message);
		},
		[error, post, response]
	);

  useEffect(() => {
		login({ email: "toheebeji@gmail.com", password: "twilight123" });
	}, [login]);

	return <AuthContext.Provider value={{ user, register, authError, login }}>{children}</AuthContext.Provider>;
};
