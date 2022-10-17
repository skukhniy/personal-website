import React from "react";
import Introduction from "./Introduction";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
	return (
		<div>
			{/* <Introduction /> */}
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
