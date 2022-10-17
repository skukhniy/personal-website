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
			{/* <svg
				class="divider-bottom"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				viewBox="0 0 1920 120"
			>
				<path
					fill-rule="evenodd"
					fill="green"
					d="M0,55.9621684 C300.495844,106.578393 620.495844,106.578393 960,55.9621684 C1299.50416,5.34594386 1619.50416,5.34594386 1920,55.9621684 L1920,120 L0,120 L0,55.9621684 Z"
				></path>
			</svg> */}
			{/* <svg
				class="divider-top"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				viewBox="0 0 1920 120"
			>
				<path
					fill-rule=""
					fill="green"
					d="M0,37.9621684 C300.495844,88.578393 620.495844,88.578393 960,37.9621684 C1299.50416,-12.6540561 1619.50416,-12.6540561 1920,37.9621684 L1920,102 L0,102 L0,37.9621684 Z"
					transform="matrix(1 0 0 -1 0 102)"
				></path>
			</svg> */}
			<hr></hr>
			<Skills />
			<hr></hr>
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
						fill="rgb(179, 232, 187)"
						d="M0,55.9621684 C300.495844,106.578393 620.495844,106.578393 960,55.9621684 C1299.50416,5.34594386 1619.50416,5.34594386 1920,55.9621684 L1920,120 L0,120 L0,55.9621684 Z"
					></path>
				</svg>
				<Contact />
			</div>
		</div>
	);
}
