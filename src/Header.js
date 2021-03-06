import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
	return (
		<>
			<section className="flex flex-col px-0 mt-2 leading-snug text-left md:mt-16 dark:text-white md:mx-14">
				<div className="space-y-2">
					<p className="mt-6 mb-6 text-3xl font-extrabold md:mt-8 md:mb-8 md:text-5xl text-black-900 dark:text-white-900 ">
						Hi, I'm Gurkirat!
					</p>

					<p className="text-xl font-bold tracking-normal md:text-4xl text-black-700 dark:text-white-700">
						Javascript/React developer. UX Designer.
					</p>
					<p className="mb-4 text-xl font-extrabold tracking-normal md:text-4xl text-black-700 dark:text-white-700">
						Previously @GyanDhan , @MindScroll and @94Films
					</p>
					<div className="flex py-4 my-10 space-x-4 text-4xl md:py-10 dark:text-white">
						<a href="https://github.com/GurkiratSidhu">
							<FaGithub />
						</a>
						<a href="https://www.linkedin.com/in/gurkiratsidhu/">
							<FaLinkedin />
						</a>
					</div>
				</div>

				<div className="my-2 space-y-4 text-xl md:my-8 md:text-2xl dark:text-white-700 text-black-700">
					<p>
						I am a rising React developer. Graduated in CSE from Thapar
						University, Patiala.
					</p>
					<p>
						I enjoy creating high-quality software products with a complex logic
						behind it.
					</p>
					<p>My technology stack includes Javascript, React and Tailwind.</p>
				</div>
			</section>
		</>
	);
}

export default Header;
