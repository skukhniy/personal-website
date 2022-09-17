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
		<div>
			<h4>{header}</h4>
			<div
				className="d-sm-flex flex-wrap p-4 justify-content-around border"
				style={{ width: "18em" }}
			>
				{skillsList}
			</div>
			{/* <ul>{skillsList}</ul>
			{imgs} */}
		</div>
	);
}
