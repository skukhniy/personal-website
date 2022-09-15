import React from "react";
import Typewriter from "typewriter-effect";

export default function Introduction() {
	return (
		<div className="intro-custom p-5 text-center">
			<Typewriter
				onInit={(typewriter) => {
					typewriter

						.typeString("Hello World...")

						.pauseFor(1000)
						.deleteAll()
						.typeString("My name is Stan :)")
						.start();
				}}
			/>
		</div>
	);
}
