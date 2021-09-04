import React from "react";
import Image1 from "./Images/netflix.png";
import Image2 from "./Images/coloristy.png";
import Image3 from "./Images/basiclandingpage.png";

function Projects() {
	return (
		<div>
			<div className="mt-10 md:mx-10 dark:text-white ">
				<h1 className="mb-4 text-3xl font-extrabold text-left md:text-4xl md:text-sectionHeader dark:text-white-900 text-black-900">
					Projects
				</h1>
				<h2 className="text-xl text-left md:text-2xl dark:text-white-700 text-black-700">
					Here are some of my most favourite projects that I enjoyed coding and
					designing from scratch..
				</h2>

				<div className="flex flex-col">
					<div className="flex flex-col my-4 md:flex-row md:my-10">
						<div className="w-1/2 shadow-2xl">
							<img src={Image1} />
						</div>
						<div className="text-right">
							<h1 className="text-2xl font-extrabold">Netflix Clone</h1>
							<h2 className="px-2 py-4 my-6 text-xl font-medium shadow-2xl">
								Created using React with TMDB API (using Axios)
							</h2>
							<h2 className="text-xl">React Axios</h2>
							<a href="https://gurkirat-netflix.vercel.app/">LINK</a>
							<a href="https://github.com/GurkiratSidhu/netflix-clone">
								Github Repo
							</a>
						</div>
					</div>
					<div className="flex flex-col my-4 md:flex-row md:my-10">
						<div className="w-1/2 shadow-2xl">
							<img src={Image2} />
						</div>
						<div className="text-right ">
							<h1 className="text-2xl font-extrabold">
								Coloristy Landing Page
							</h1>
							<h2 className="px-2 py-4 my-6 text-xl font-medium shadow-2xl">
								Created using React with TailwindCSS,<br></br> and implemented
								Dark mode functionality toggle
							</h2>
							<h2 className="text-xl">React Tailwind</h2>
							<a href="https://gurkirat-coloristy.vercel.app/">LINK</a>
							<a href="https://github.com/GurkiratSidhu/coloristy-landing-page">
								Github Repo
							</a>
						</div>
					</div>
					<div className="flex flex-col my-4 md:flex-row md:my-10">
						<div className="w-1/2 shadow-2xl">
							<img src={Image3} />
						</div>
						<div className="text-right ">
							<h1 className="text-2xl font-extrabold">EasyBank Landing Page</h1>
							<h2 className="px-2 py-4 my-6 text-xl font-medium shadow-2xl">
								Landing page using React and SASS
							</h2>
							<h2 className="text-xl">HTML SASS</h2>

							<a href="https://gurkirat-basic-landing-page.vercel.app/">LINK</a>
							<a
								href="https://github.com/GurkiratSidhu/basic-landing-page"
								className="text-xl text-blue-500"
							>
								Github Repo
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
