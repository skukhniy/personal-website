import React from "react";
import me from "../assets/Me.png";

export default function About() {
	return (
		<div className="about-custom p-5">
			<span class="anchor" id="aboutMe"></span>
			<div className="text-center">
				<h3>About Me</h3>
			</div>
			<div className="d-sm-flex p-4">
				<img
					className="rounded-circle img-fluid me-5"
					src={me}
					alt="Its me!"
				></img>
				<div>
					<p className="pt-3">
						Hi! My name's Stan, I'm a self taught web developer based out of
						Connecticut. My self taught journey began during the pandemic, where
						I used Python to automate report creation at my data analysis job. I
						later fell into the web development rabbit hole when I wanted to
						build a portfolio website for my photography. As I learned about web
						developement, the more I came to love it!
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
