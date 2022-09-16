import React from "react";

export default function SkillsCard({ header, skills }) {
	let skillsList = [];

	skills.forEach((skill) => {
		skillsList.push(<li>{skill}</li>);
	});

	return (
		<div>
			<h3>{header}</h3>
			<ul>{skillsList}</ul>
		</div>
	);
}
