import { FC } from "react";
import undrawJumbotronImage from "../../assets/images/undraw_jumbotron.svg";
import { Navbar } from "../../components/Navbar";

export const Jumbotron: FC = () => {
	return (
		<div className="h-70vh bg-main">
			<Navbar />
			<div className="px-28 grid grid-cols-2 text-white">
				<div className="flex justify-center flex-col">
					<div className="mb-20 space-y-4">
						<h1 className="font-semibold text-6xl pr-20">Need help with your mental health?</h1>
						<p className="text-lg font-light pr-20">Ask Mental can help you find your answers. Join now to start asking</p>
					</div>
					<div>
						<button className="rounded-xl px-5 py-3 shadow-lg bg-red-500 font-semibold transform transition ease-out duration-100 hover:bg-red-600 active:scale-95">
							Get Started
						</button>
					</div>
				</div>
				<div>
					<img src={undrawJumbotronImage} alt="Character Dancing" className="h-full w-full" />
				</div>
			</div>
		</div>
	);
};
