import React, { useState } from "react"
import Dropdown from "../Dropdown/Dropdown"
import Header from "../Header/Header"
import {
	HeroContainer,
	HeroWrapper,
	HeroLeft,
	HeroRight,
	Image,
	ScrollDown,
	ScrollLink,
} from "./HeroElements"
function Hero() {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}
	return (
		<main>
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Header toggle={toggle} />
			<HeroContainer>
				<HeroWrapper>
					<HeroLeft>
						<h1>Hola, Soy David</h1>
						<h5>Backend Developer</h5>
						<p>Aún estoy aprendiendo.</p>
					</HeroLeft>
					<HeroRight>
						<Image
							src="https://gurupawar.github.io/portfolio/assets/man-svgrepo-com.svg"
							alt="man-svgrepo"
						/>
					</HeroRight>
				</HeroWrapper>
				<ScrollDown to="acerca">
					<ScrollLink>
						Echa un viztazo
						<img
							src="https://raw.githubusercontent.com/gurupawar/portfolio/main/assets/scroll-down.svg"
							alt="scroll-down"
						/>
					</ScrollLink>
				</ScrollDown>
			</HeroContainer>
		</main>
	)
}

export default Hero
