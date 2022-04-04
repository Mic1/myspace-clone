import Breakpoints from "../Breakpoints/Breakpoints";

import { Container, Navbar, Nav } from "react-bootstrap";

import styles from "./Navbar1.module.scss";

import links from "../../data/links.json";

function Navbar1() {
	return (
		<Container>
			<Navbar bg="primary" variant="dark" expand="md" fixed="top">
				<Navbar.Brand href="https://github.com/Mic1?tab=repositories">
					MySpace
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className={styles.nav} navbarScroll>
						<Breakpoints />

						{links.map((link) => {
							return (
								<Nav.Item key={link.id}>
									<Nav.Link href={link.url}>
										{link.label}
									</Nav.Link>
								</Nav.Item>
							);
						})}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}

export default Navbar1;
