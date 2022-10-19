import React from "react";

export default function SkillsCard({ header, imgs, skills }) {
	let skillsList = [];
	// skills.forEach((skill) => {
	// 	skillsList.push(<li>{skill}</li>);
	// });

	for (let index = 0; index < imgs.length; index++) {
		skillsList.push(
			<div className=" d-flex flex-column p-3 justify-content-between align">
				<div>{imgs[index]}</div>
				{skills[index]}
			</div>
		);
	}

	return (
		<div
			data-aos="fade-up"
			className="text-center d-flex flex-wrap flex-column align-items-center mb-4"
		>
			<h5>{header}</h5>
			<div className="d-flex flex-wrap p-4 justify-content-around border skillCard">
				{skillsList}
			</div>
			{/* <ul>{skillsList}</ul>
			{imgs} */}
		</div>
	);
}
