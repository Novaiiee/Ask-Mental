import { FC } from "react";

interface Props {
	name: string;
	image: any;
	desc: string;
}

export const Feature: FC<Props> = ({ name, image, desc }) => {
	return (
		<div className="grid grid-rows-5 space-y-4 max-w-xs shadow-xl border-2 rounded-xl border-gray-50 p-10">
			<img src={image} alt="Feature" className="row-span-3" />
			<div className="space-y-4 row-span-2">
				<h1 className="text-center font-semibold">{name}</h1>
				<p className="font-light text-center">{desc}</p>
			</div>
		</div>
	);
};
