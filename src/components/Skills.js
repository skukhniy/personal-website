import React from "react";
import SkillsCard from "./SkillsCard";

export default function Skills() {
	return (
		<div className="skills-custom text-center p-3">
			<h3>Skills</h3>
			<div id="skillsContainer" className="d-flex">
				<SkillsCard />
				<SkillsCard />
				<SkillsCard />
			</div>
		</div>
	);
}
