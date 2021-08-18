import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { QuestionsProvider } from "./contexts/QuestionsContext";
import "./styles/index.css";
import "./styles/tailwind.css";

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<QuestionsProvider>
				<App />
			</QuestionsProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

axios.defaults.withCredentials = true;