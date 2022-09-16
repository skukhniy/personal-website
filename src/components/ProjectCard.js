import React from "react";

export default function ProjectCard({ title, desc, img, demo, code }) {
	return (
		<div className="container p-4 d-flex border border-4 border-dark">
			<div className="d-flex flex-column ms-5 justify-content-between w-50">
				<h4 className="">{title}</h4>
				<p className="pe-5">{desc}</p>
				<div className="mb-3">
					<button>
						<a
							className="text-decoration-none text-dark"
							target="_blank"
							rel="noopener noreferrer"
							href={demo}
						>
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
							View Code
						</a>
					</button>
				</div>
			</div>
			<img
				src={img}
				alt="A mock store for vinyl records"
				className="img-fluid project-image"
			></img>
		</div>
	);
}
