import React from "react";
import { FaCode } from "react-icons/fa";
import { BsDisc } from "react-icons/bs";
import Button from "react-bootstrap/Button";
export default function ProjectCard({ title, desc, img, demo, code }) {
	return (
		<div
			data-aos="fade-left"
			data-aos-once="true"
			className="container p-4 d-lg-flex mb-5 project-border"
		>
			<div className="d-flex flex-column ms-5 me-5 justify-content-between">
				<h4 className="headercolor">{title}</h4>
				<p>{desc}</p>
				<div className="mb-3">
					<Button
						className="buttons me-1 ms-1"
						variant="outline-success buttons"
					>
						<a
							className="text-decoration-none"
							target="_blank"
							rel="noopener noreferrer"
							href={demo}
						>
							<BsDisc />
							<span> </span>
							Demo
						</a>
					</Button>
					<Button variant="outline-success buttons" className="ms-1 me-1">
						<a
							className="text-decoration-none"
							target="_blank"
							rel="noopener noreferrer"
							href={code}
						>
							<FaCode />
							<span> </span>
							View Code
						</a>
					</Button>
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
