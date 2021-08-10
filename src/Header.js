import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
	return (
		<>
			<section className="flex flex-col px-0 mt-16 leading-snug text-left dark:text-white md:mx-28">
				<div className="">
					<p className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-black-900 dark:text-white-900 ">
						Hi, I'm Gurkirat!
					</p>

					<p className="text-xl font-bold tracking-normal md:text-3xl text-black-700 dark:text-white-700">
						Javascript/React developer. Previously @GyanDhan , @MindScroll and
						@94Films
					</p>
					<div className="flex mt-8 space-x-4 text-4xl dark:text-white">
						<a href="https://github.com/GurkiratSidhu">
							<FaGithub />
						</a>
						<a href="https://www.linkedin.com/in/gurkiratsidhu/">
							<FaLinkedin />
						</a>
					</div>
				</div>

				<div className="mb-8 text-base md:text-xl dark:text-white-700 text-black-700">
					<p>
						I am a rising React developer. Graduated in CSE from Thapar
						University, Patiala.<br></br>I enjoy creating high-quality software
						products with a complex logic behind it. <br></br>My technology
						stack includes Javascript, React and Tailwind.
					</p>
				</div>
			</section>
		</>
	);
}

export default Header;
