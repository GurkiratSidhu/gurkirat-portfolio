import React from "react";
import Toggle from "./toggle";

function Nav() {
	return (
		<header className="">
			<nav className="flex justify-between py-2 pt-10 md:px-8">
				<div className="">
					<h1 className="text-4xl font-bold text-gray-800 dark:text-white">
						Gurkirat
					</h1>
				</div>
				<div className="text-base text-gray-800 uppercase dark:text-white ">
					<Toggle />
				</div>
			</nav>
		</header>
	);
}

export default Nav;
