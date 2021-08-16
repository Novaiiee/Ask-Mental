import React, { FC } from 'react';

export const Footer: FC = () => {
  return (
		<div className="bg-main px-28 py-28 flex items-center justify-between text-white">
			<h1 className="font-semibold text-xl">Ask Mental</h1>
			<div className="space-x-10 flex items-center">
				<h1>Login</h1>
				<h1>About</h1>
			</div>
		</div>
	);
}