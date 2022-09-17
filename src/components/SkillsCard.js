import React from "react";

export default function SkillsCard({ header, imgs, skills }) {
	let skillsList = [];
	// skills.forEach((skill) => {
	// 	skillsList.push(<li>{skill}</li>);
	// });

	for (let index = 0; index < imgs.length; index++) {
		skillsList.push(
			<div className=" d-flex flex-column p-3 justify-content-between">
				{imgs[index]}
				{skills[index]}
			</div>
		);
	}

	return (
		<div>
			<h4>{header}</h4>
			<div
				className="d-flex flex-wrap p-4 justify-content-around border"
				style={{ width: "250px" }}
			>
				{skillsList}
			</div>
			{/* <ul>{skillsList}</ul>
			{imgs} */}
		</div>
	);
}
