import { FC } from "react";
import { Footer } from "../../components/Footer";
import { Features } from "./Features";
import { Jumbotron } from "./Jumbotron";

export const Landing: FC = () => {
	return (
		<div>
			<Jumbotron />
			<Features />
			<Footer />
		</div>
	);
};
