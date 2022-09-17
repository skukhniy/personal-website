import React from "react";
import { FaCode } from "react-icons/fa";
import { BsDisc } from "react-icons/bs";
export default function ProjectCard({ title, desc, img, demo, code }) {
	return (
		<div className="container p-4 d-lg-flex border border-4 mb-5 border-dark">
			<div className="d-flex flex-column ms-5 me-5 justify-content-between w-50">
				<h4 className="">{title}</h4>
				<p>{desc}</p>
				<div className="mb-3">
					<button className="me-3">
						<a
							className="text-decoration-none text-dark"
							target="_blank"
							rel="noopener noreferrer"
							href={demo}
						>
							<BsDisc />
							<span> </span>
							Demo
						</a>
					</button>
					<button>
						<a
							className="text-decoration-none text-dark"
							target="_blank"
							rel="noopener noreferrer"
							href={code}
						>
							<FaCode />
							<span> </span>
							View Code
						</a>
					</button>
				</div>
			</div>
			<img
				src={img}
				alt="A mock store for vinyl records"
				className="project-image"
			></img>
		</div>
	);
}
