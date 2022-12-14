import React, { useEffect } from "react";
import Aos from "aos";
import Introduction from "./Introduction";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);
	return (
		<div>
			{/* <Introduction /> */}
			<About />
			<Skills />
			<Projects />

			<div>
				<svg
					class="divider-bottom"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					viewBox="0 0 1920 120"
				>
					<path
						fill-rule="evenodd"
						fill="#1a552f"
						d="M0,55.9621684 C300.495844,106.578393 620.495844,106.578393 960,55.9621684 C1299.50416,5.34594386 1619.50416,5.34594386 1920,55.9621684 L1920,120 L0,120 L0,55.9621684 Z"
					></path>
				</svg>
				<Contact />
			</div>
		</div>
	);
}
