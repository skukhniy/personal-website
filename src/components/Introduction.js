import React from "react";
import Typewriter from "typewriter-effect";

export default function Introduction() {
	return (
		<div className="intro-custom p-5 mt-5 text-center">
			<Typewriter
				options={{
					loop: true,
				}}
				onInit={(typewriter) => {
					typewriter

						.typeString("Hello World...")

						.pauseFor(1500)
						.deleteAll()
						.typeString("My name is Stan :)")
						.pauseFor(2000)
						.deleteAll()
						.start();
				}}
			/>
		</div>
	);
}