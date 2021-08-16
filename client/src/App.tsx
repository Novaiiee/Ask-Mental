import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Landing } from "./views/landing/Landing";

function App() {
	return (
		<div className="font-poppins">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Landing} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
