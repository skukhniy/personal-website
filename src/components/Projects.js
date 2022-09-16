import React from "react";
import ProjectCard from "./ProjectCard";
import shopPic from "../assets/shop-screenshot.png";

export default function Projects() {
	return (
		<div className="text-center projects-custom p-3">
			<h3 className="mb-5">Projects</h3>
			<div className="p-5">
				<ProjectCard
					title={"Vinyl Store"}
					desc={
						"To practice React fundamentals including hooks and routing, I created this mock webpage for an online record store."
					}
					img={shopPic}
					demo={"https://skukhniy.github.io/shopping-page/#/"}
					code={"https://github.com/skukhniy/shopping-page"}
				/>
			</div>
		</div>
	);
}
