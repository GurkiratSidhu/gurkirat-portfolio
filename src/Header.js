import React from "react";
import desk from "./Images/desk.jpg";

function Header() {
	return (
		<>
			<section className="flex flex-col px-0 mt-16 leading-snug text-left md:mx-28">
				<div className="">
					<p className="my-10 text-4xl font-bold dark:text-white ">
						Hi, I'm Gurkirat!
					</p>

					<p className="my-10 text-4xl font-bold text-gray-900 dark:text-white">
						Javascript/React developer. Previously @GyanDhan , @MindScroll and
						@94Films
					</p>
				</div>

				<div className="my-10 text-3xl ">
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
