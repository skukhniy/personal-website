import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
	return (
		<div className="contact-custom text-center p-3">
			<h3>Contact</h3>
			<h5>
				Have a question or want to connect? Here are the places you can find me
			</h5>
			<div className="mb-3 mt-3">
				<span>Email: </span>
				<a href="mailto:skukhniy@gmail.com" style={{ color: "black" }}>
					<span>skukhniy@gmail.com</span>
				</a>
			</div>
			<div className="mb-3">
				<SocialIcon
					url="https://github.com/skukhniy"
					fgColor="black"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://instagram.com/skukhniy"
					fgColor="black"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://twitter.com/skukhniy"
					fgColor="black"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.linkedin.com/in/stanislav-kukhniy-5b12a1138/"
					fgColor="black"
					bgColor="transparent"
				/>
			</div>
		</div>
	);
}
