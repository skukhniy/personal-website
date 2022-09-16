import React from "react";
import SkillsCard from "./SkillsCard";

export default function Skills() {
	return (
		<div className="skills-custom text-center p-3">
			<h3>Skills</h3>
			<div id="skillsContainer" className="d-flex p-3 justify-content-around">
				<SkillsCard
					header={"Front End"}
					skills={["HTML5", "CSS", "SASS", "Javascript", "React"]}
				/>
				<SkillsCard
					header={"Back End"}
					skills={["Python", "Firebase", "MongoDB", "Node.js", "Express"]}
				/>
				<SkillsCard
					header={"Misc."}
					skills={[
						"Photoshop",
						"Lightroom",
						"Photography",
						"Data Analysis",
						"Excel (VBA)",
					]}
				/>
			</div>
		</div>
	);
}
