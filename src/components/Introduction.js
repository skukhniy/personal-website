import React from "react";
import Typewriter from "typewriter-effect";

export default function Introduction() {
	return (
		<div className="intro-custom pt-5 pe-5 ps-5 mt-5 text-center">
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
