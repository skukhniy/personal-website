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
		<div className="skills-custom text-center p-3 pb-5 mt-3">
			<span class="anchor" id="skills"></span>
			<h3 data-aos="fade-up">Skills</h3>
			<div
				id="skillsContainer"
				className="d-sm-flex p-3 justify-content-around ms-2"
			>
				<SkillsCard
					header={"Front End"}
					imgs={[
						<SiHtml5 size="4em" color="#72ff72" />,
						<SiCss3 size="4em" color="#72ff72" />,
						<SiSass size="4em" color="#72ff72" />,
						<SiBootstrap size="4em" color="#72ff72" />,
						<SiJavascript size="4em" color="#72ff72" />,
						<SiReact size="4em" color="#72ff72" />,
					]}
					skills={["HTML5", "CSS3", "SASS", "Bootstrap", "Javascript", "React"]}
				/>
				<SkillsCard
					header={"Back End"}
					imgs={[
						<SiPython size="4em" color="#72ff72" />,
						<SiFirebase size="4em" color="#72ff72" />,
						<SiMongodb size="4em" color="#72ff72" />,
						<SiNodedotjs size="4em" color="#72ff72" />,
						<SiExpress size="4em" color="#72ff72" />,
						<SiPassport size="4em" color="#72ff72" />,
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
						<SiAdobephotoshop size="4em" color="#72ff72" />,
						<SiAdobelightroom size="4em" color="#72ff72" />,
						<FaCameraRetro size="4em" color="#72ff72" />,
						<SiMicrosoftexcel size="4em" color="#72ff72" />,
					]}
					skills={["Photoshop", "Lightroom", "Photography", "Excel (VBA)"]}
				/>
			</div>
		</div>
	);
}
