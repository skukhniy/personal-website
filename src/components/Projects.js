import React from "react";
import ProjectCard from "./ProjectCard";
import shopPic from "../assets/shop-screenshot.png";
import waldoPic from "../assets/waldo-screenshot.png";
import starwarsPic from "../assets/starwars-screenshot.png";
import pokedexPic from "../assets/pokedex-screenshot.png";

export default function Projects() {
	return (
		<div className="text-center projects-custom p-3">
			<span class="anchor" id="projects"></span>
			<h3 className="mb-1">Projects</h3>

			<div className="p-5">
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
					title={"Memory Card Game"}
					desc={
						"This is a Star Wars inspired memory card game to help practice React functional skills."
					}
					img={starwarsPic}
					demo={"https://skukhniy.github.io/Memory-Card-Game/"}
					code={"https://github.com/skukhniy/Memory-Card-Game"}
				/>
				<ProjectCard
					title={"Vinyl Store"}
					desc={
						"To practice React fundamentals including hooks and routing, I created this mock webpage for an online record store."
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
