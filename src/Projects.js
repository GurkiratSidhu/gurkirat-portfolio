import React from "react";
import Image1 from "./Images/netflix.png";
import Image2 from "./Images/coloristy.png";
import Image3 from "./Images/basiclandingpage.png";

function Projects() {
	return (
		<div>
			<div className="mx-10 mt-10 dark:text-white ">
				<h1 className="mb-4 text-4xl font-extrabold text-left md:text-sectionHeader dark:text-white-900 text-black-900">
					Projects
				</h1>
				<h2 className="text-base text-left md:text-2xl dark:text-white-700 text-black-700">
					Here are some of my most favourite projects that I enjoyed coding and
					designing from scratch..
				</h2>

				<div className="flex flex-col">
					<div className="flex">
						<img src={Image1} />
						<h1 className="text-2xl">Netflix Clone</h1>
						<h2 className="text-xl">
							Created using React with TMDB API (using Axios)
						</h2>
					</div>
					<div className="flex">
						<img src={Image2} />
						<h1 className="text-2xl">Coloristy Landing Page</h1>
						<h2 className="text-xl">
							Created using React with TailwindCSS, and implemented Dark mode
							functionality toggle
						</h2>
					</div>
					<div className="flex">
						<img src={Image3} />
						<h1 className="text-2xl">EasyBank Landing Page</h1>
						<h2 className="text-xl">Landing page using React and SASS</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
