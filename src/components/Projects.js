import React from "react";
import ProjectCard from "./ProjectCard";
import shopPic from "../assets/shop-screenshot.png";
import waldoPic from "../assets/waldo-screenshot.png";
import starwarsPic from "../assets/starwars-screenshot.png";
import pokedexPic from "../assets/pokedex-screenshot.png";
import blogPic from "../assets/blog-screenshot.png";

export default function Projects() {
	return (
		<div className="text-center projects-custom pt-3 pe-3 ps-3">
			<span class="anchor" id="projects"></span>
			<h3 data-aos="fade-in" data-aos-once="true" className="mb-1">
				Projects
			</h3>

			<div className="pt-5 ps-5 pe-5">
				<ProjectCard
					title={"RESTful API Blog"}
					desc={
						"A full-stack CRUD app using a MERN stack. It implements user authentication for admin privileges, a rich text editor to add design variety to posts, and image uploads. Deployed on AWS using EC2 on a virtual Ubuntu machine."
					}
					img={blogPic}
					demo={"http://18.234.147.248/"}
					code={"https://github.com/skukhniy/blog-api"}
				/>
				<ProjectCard
					title={"Pokedex"}
					desc={
						"This project is a Pokédex website which uses a Pokemon API (https://pokeapi.co) to display all the Pokémon from a specific region."
					}
					img={pokedexPic}
					demo={"https://skukhniy.github.io/pokedex/dist/index.html"}
					code={"https://github.com/skukhniy/pokedex"}
				/>
				<ProjectCard
					title={"Vinyl Store"}
					desc={
						"Built an e-commerce website using React for a fake vinyl store. Added Jest testing to ensure that components were working properly after every update."
					}
					img={shopPic}
					demo={"https://skukhniy.github.io/shopping-page/#/"}
					code={"https://github.com/skukhniy/shopping-page"}
				/>
				<ProjectCard
					title={"Where's Waldo (Nintendo Version)"}
					desc={
						"A twist on the classic 'Wheres Waldo' game. In this case, you're searching for Nintendo characters from the GameCube era. This project was used as a way for me to practice using a BaaS like Firebase, and to get more practice implementing unit testing in React."
					}
					img={waldoPic}
					demo={"https://skukhniy.github.io/nintendo-wheres-waldo/"}
					code={"https://github.com/skukhniy/nintendo-wheres-waldo"}
				/>
			</div>
		</div>
	);
}
