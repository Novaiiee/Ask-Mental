import React, { FC } from "react";

interface Props {}

export const Navbar: FC<Props> = () => {
	return (
		<div className="w-screen px-28 pb-20 pt-10 text-white flex items-center justify-between">
			<h1 className="font-semibold text-xl">Ask Mental</h1>
			<div className="flex items-center space-x-10">
				<h1>Login</h1>
				<h1>Register</h1>
				<h1>About</h1>
			</div>
		</div>
	);
};
