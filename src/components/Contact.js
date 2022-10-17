import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
	return (
		<div id="contact" className="contact-custom text-center p-3">
			<span class="anchor" id="aboutMe"></span>
			<h3>Contact</h3>
			<h5>
				Have a question or want to connect? Here are the places you can find me.
			</h5>
			<div className="mb-3 mt-3">
				<span>Email: </span>
				<a href="mailto:skukhniy@gmail.com" style={{ color: "#d3cfca" }}>
					<span>skukhniy@gmail.com</span>
				</a>
			</div>
			<div className="mb-3">
				<SocialIcon
					url="https://github.com/skukhniy"
					fgColor="#d3cfca"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://instagram.com/skukhniy"
					fgColor="#d3cfca"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://twitter.com/skukhniy"
					fgColor="#d3cfca"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.linkedin.com/in/stanislav-kukhniy-5b12a1138/"
					fgColor="#d3cfca"
					bgColor="transparent"
				/>
			</div>
		</div>
	);
}
