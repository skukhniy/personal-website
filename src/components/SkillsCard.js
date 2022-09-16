import React from "react";

export default function SkillsCard({ header, skills }) {
	let skillsList = [];

	skills.forEach((skill) => {
		skillsList.push(<li>{skill}</li>);
	});

	return (
		<div>
			<h4>{header}</h4>
			<ul>{skillsList}</ul>
		</div>
	);
}
