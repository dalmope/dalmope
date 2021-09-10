import React from "react"
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements"

const Header = ({ toggle }) => {
	return (
		<div className="Container">
			<Nav>
				<Logo to="/">
					<img
						src="https://gurupawar.github.io/portfolio/assets/logo.png"
						alt="logo"
					/>
				</Logo>
				<NavMenu>
					<NavLink className="menu-item" to="acerca" smooth={true}>
						Acerca de mí
					</NavLink>
					<NavLink className="menu-item" to="contact" smooth={true}>
						Contacto
					</NavLink>
				</NavMenu>
				<NavBtn>
					<a
						className="btn PrimaryBtn"
						href="https://github.com/Dalmope/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
				</NavBtn>
				<Bars onClick={toggle} />
			</Nav>
		</div>
	)
}

export default Header
