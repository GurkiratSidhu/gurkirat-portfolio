import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFigma } from "react-icons/si";

function Skills() {
	return (
		<div>
			<div className="mx-10 my-10 text-left dark:text-white">
				<h1 className="mb-4 text-4xl font-extrabold text-left">Skills</h1>
				<h2 className="text-2xl">
					I am passionate about using cutting-edge technologies. These are the
					tools I am most familiar with and build things every day.
				</h2>

				<div className="grid max-w-2xl grid-cols-2 gap-6 mt-8 sm:grid-cols-4 ">
					<div className="block px-8 py-4 text-center rounded-md shadow-lg dark:bg-gray-900 bg-whiteTheme">
						<div className="w-20 h-20 mx-auto text-yellow-400 ">
							<SiJavascript size="90" />
						</div>
						<p className="mt-2 text-xl font-medium text-black-700 dark:text-white-700">
							Javascript
						</p>
					</div>
					<div className="block px-8 py-4 text-center rounded-md shadow-lg dark:bg-gray-900 bg-whiteTheme">
						<div className="w-20 h-20 mx-auto text-blue-500">
							<FaReact size="95" />
						</div>
						<p className="mt-2 text-xl font-medium text-black-700 dark:text-white-700">
							React
						</p>
					</div>
					<div className="block px-8 py-4 text-center rounded-md shadow-lg dark:bg-gray-900 bg-whiteTheme">
						<div className="w-20 h-20 mx-auto text-red-500">
							<FaHtml5 size="90" />
						</div>
						<p className="mt-2 text-xl font-medium text-black-700 dark:text-white-700">
							Html
						</p>
					</div>
					<div className="block px-8 py-4 text-center rounded-md shadow-lg dark:bg-gray-900 bg-whiteTheme">
						<div className="w-20 h-20 mx-auto text-blue-500">
							<FaCss3Alt size="90" />
						</div>
						<p className="mt-2 text-xl font-medium text-black-700 dark:text-white-700">
							Css
						</p>
					</div>
					<div className="block px-8 py-4 text-center rounded-md shadow-lg dark:bg-gray-900 bg-whiteTheme">
						<div className="w-20 h-20 mx-auto text-green-400">
							<SiTailwindcss size="100" />
						</div>
						<p className="mt-2 text-xl font-medium text-black-700 dark:text-white-700">
							Tailwind
						</p>
					</div>
					<div className="block px-4 py-2 text-center rounded-md shadow-lg dark:bg-gray-900 bg-whiteTheme">
						<div className="flex items-center justify-center w-full h-20 mx-auto text-red-500">
							<FaGitAlt size="90" />
						</div>
						<p className="mt-2 text-xl font-medium text-black-700 dark:text-white-700">
							Git
						</p>
					</div>
					<div className="block px-8 py-4 text-center rounded-md shadow-lg dark:bg-gray-900 bg-whiteTheme">
						<div className="w-20 h-20 mx-auto text-red-400">
							<FaSass size="100" />
						</div>
						<p className="mt-2 text-xl font-medium text-black-700 dark:text-white-700">
							Sass
						</p>
					</div>
					<div className="block px-8 py-4 text-center rounded-md shadow-lg dark:bg-gray-900 bg-whiteTheme">
						<div className="w-20 h-20 mx-auto">
							<SiFigma size="large" />
						</div>
						<p className="mt-2 text-xl font-medium text-black-700 dark:text-white-700">
							Figma
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Skills;
