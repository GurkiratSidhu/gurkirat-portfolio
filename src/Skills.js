import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFigma } from "react-icons/si";

function Skills() {
	return (
		<div>
			<div className="mx-10 my-10 text-left dark:text-white">
				<h1 className="text-4xl font-extrabold text-left">Skills</h1>
				<h2 className="text-2xl">
					I am passionate about using cutting-edge technologies. These are the
					tools I am most familiar with and build things every day.
				</h2>
				<div className="flex space-x-4 text-6xl ">
					<div className="block pt-3 pb-2 text-center rounded-md dark:bg-gray-900 bg-whiteTheme">
						<div className="text-yellow-400">
							<SiJavascript />
						</div>
						<p className="mt-2 text-base font-medium text-black-700 dark:text-white-700">
							Javascript
						</p>
					</div>
					<div className="block pt-3 pb-2 text-center rounded-md dark:bg-gray-900 bg-whiteTheme">
						<div className="text-blue-500">
							<FaReact />
						</div>
						<p className="mt-2 text-base font-medium text-black-700 dark:text-white-700">
							React
						</p>
					</div>
					<div className="block pt-3 pb-2 text-center rounded-md dark:bg-gray-900 bg-whiteTheme">
						<div className="text-red-500">
							<FaHtml5 />
						</div>
						<p className="mt-2 text-base font-medium text-black-700 dark:text-white-700">
							Html
						</p>
					</div>
					<div className="block pt-3 pb-2 text-center rounded-md dark:bg-gray-900 bg-whiteTheme">
						<div className="text-blue-500">
							<FaCss3Alt />
						</div>
						<p className="mt-2 text-base font-medium text-black-700 dark:text-white-700">
							Css
						</p>
					</div>
					<div className="block pt-3 pb-2 text-center rounded-md dark:bg-gray-900 bg-whiteTheme">
						<div className="text-green-400">
							<SiTailwindcss />
						</div>
						<p className="mt-2 text-base font-medium text-black-700 dark:text-white-700">
							Tailwind
						</p>
					</div>
					<div className="block pt-3 pb-2 text-center rounded-md dark:bg-gray-900 bg-whiteTheme">
						<div className="text-red-500">
							<FaGitAlt />
						</div>
						<p className="mt-2 text-base font-medium text-black-700 dark:text-white-700">
							Git
						</p>
					</div>
					<div className="block pt-3 pb-2 text-center rounded-md dark:bg-gray-900 bg-whiteTheme">
						<div className="text-red-400">
							<FaSass />
						</div>
						<p className="mt-2 text-base font-medium text-black-700 dark:text-white-700">
							Sass
						</p>
					</div>
					<div className="block pt-3 pb-2 text-center rounded-md dark:bg-gray-900 bg-whiteTheme">
						<div className="">
							<SiFigma />
						</div>
						<p className="mt-2 text-base font-medium text-black-700 dark:text-white-700">
							Figma
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Skills;
