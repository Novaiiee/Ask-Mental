import { FC } from "react";
import { Feature } from "./Feature";
import undrawAsking from "../../assets/images/undraw_asking.svg";
import undrawAnswer from "../../assets/images/undraw_answer.svg";
import undrawResources from "../../assets/images/undraw_resources.svg";

export const Features: FC = () => {
	return (
		<div className="px-28 pb-10 pt-40 flex flex-col justify-center items-center">
			<div className="flex flex-col items-center mb-20">
				<h1 className="text-5xl font-medium pb-5">What can Ask Mental do?</h1>
				<p className="font-light">Here are the main features Ask Mental provides</p>
			</div>
			<div className="grid grid-cols-3 gap-20">
				<Feature
					image={undrawAsking}
					name="Asking Questions"
					desc="You can ask questions that you need and others can respond"
				/>
				<Feature
					image={undrawAnswer}
					name="Helping others"
					desc="You can answer questions that others have"
				/>
				<Feature
					image={undrawResources}
					name="Other Resources"
					desc="We have resources on our site that can help with certain issues you have"
				/>
			</div>
		</div>
	);
};
