import React from "react";
import SkillsCard from "./SkillsCard";
// import {
// 	DiHtml5,
// 	DiCss3,
// 	DiSass,
// 	DiBootstrap,
// 	DiJavascript1,
// 	DiReact,
// 	DiPython,
// 	DiFirebase,
// 	DiMongodb,
// 	DiNodejs,
// } from "react-icons/di";
import {
	SiHtml5,
	SiCss3,
	SiSass,
	SiBootstrap,
	SiJavascript,
	SiReact,
	SiPython,
	SiFirebase,
	SiMongodb,
	SiNodedotjs,
	SiExpress,
	SiPassport,
	SiAdobephotoshop,
	SiAdobelightroom,
	SiMicrosoftexcel,
} from "react-icons/si";
import { BsCamera } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";

export default function Skills() {
	return (
		<div className="skills-custom text-center p-3 pb-5">
			<span class="anchor" id="skills"></span>
			<h3>Skills</h3>
			<div
				id="skillsContainer"
				className="d-sm-flex p-3 justify-content-around ms-2"
			>
				<SkillsCard
					header={"Front End"}
					imgs={[
						<SiHtml5 size="4em" />,
						<SiCss3 size="4em" />,
						<SiSass size="4em" />,
						<SiBootstrap size="4em" />,
						<SiJavascript size="4em" />,
						<SiReact size="4em" />,
					]}
					skills={["HTML5", "CSS3", "SASS", "Bootstrap", "Javascript", "React"]}
				/>
				<SkillsCard
					header={"Back End"}
					imgs={[
						<SiPython size="4em" />,
						<SiFirebase size="4em" />,
						<SiMongodb size="4em" />,
						<SiNodedotjs size="4em" />,
						<SiExpress size="4em" />,
						<SiPassport size="4em" />,
					]}
					skills={[
						"Python",
						"Firebase",
						"MongoDB",
						"Node.js",
						"ExpressJS",
						"PassportJS",
					]}
				/>
				<SkillsCard
					header={"Misc."}
					imgs={[
						<SiAdobephotoshop size="4em" />,
						<SiAdobelightroom size="4em" />,
						<FaCameraRetro size="4em" />,
						<SiMicrosoftexcel size="4em" />,
					]}
					skills={["Photoshop", "Lightroom", "Photography", "Excel (VBA)"]}
				/>
			</div>
		</div>
	);
}
