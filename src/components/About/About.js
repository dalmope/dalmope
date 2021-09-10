import React from "react"
import { Image, ContactWrapper } from "./AboutElements"
function About() {
	return (
		<ContactWrapper id="acerca">
			<div className="Container">
				<div className="SectionTitle">About Me</div>
				<div className="BigCard">
					<Image
						src="https://gurupawar.github.io/portfolio/assets/man-svgrepo-com.svg"
						alt="man-svgrepo"
					/>
					<div className="AboutBio">
						Hola! Mi nombre es <strong>David Alberto</strong> y este es mi sitio
						web, aun esta en desarrollo, proximamente sera mas interesante.
					</div>
				</div>
			</div>
		</ContactWrapper>
	)
}

export default About
