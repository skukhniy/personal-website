import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import me from "../assets/Me.png";

export default function About() {
	return (
		<div className="about-custom pe-5 ps-5 pb-4 mt-5 p-4">
			<span class="anchor" id="aboutMe"></span>
			<div className="text-center"></div>
			<div className="d-sm-flex pb-4 pe-4 ps-4 pt-4">
				<div className="text-center">
					<img
						className="rounded-circle img-fluid mb-3"
						src={me}
						alt="Its me!"
					></img>
					<h3>
						Hey! I'm <span className="neon">Stanislav Kukhniy</span>
					</h3>
					<p className="pt-3">
						I'm a self taught web developer based out of Connecticut. My self
						taught journey began in 2020, when I used Python to
						automate the creation of reports at my data analysis job. I later fell into
						the web development rabbit hole when I wanted to build a portfolio
						website for my photography. The more I learned about web developement, the
						more I came to love it!
					</p>
					<p>
						Outside of coding, I also enjoy traveling, photography, gaming,
						movies, and watching Tottenham Hotspur or Formula 1 on a Sunday
						Morning.
					</p>
				</div>
			</div>
		</div>
	);
}
