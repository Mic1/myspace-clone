import styles from "./Grid3.module.scss";
import Profile from "../../components/Profile/Profile";
import Contact from "../../components/contact/contact";
import Interests from "../../components/interests/interests";
import Extended from "../../components/extended/extended";
import Blurb from "../../components/Blurb/Blurb";
import FriendsSpace2 from "../../components/friendsSpace2/friendsSpace2";

import Row from "react-bootstrap/Row";
import { Col, Container } from "react-bootstrap";

const Grid3 = ({ children, className, ...rest }) => {
	let gridClassName = styles.grid;
	// let grid2ClassName = styles.grid2;
	// console.log("gridChildren: ", children);

	if (className) {
		gridClassName = `${gridClassName} ${className}`;
	}

	return (
		<div
			{...rest}
			className={gridClassName}
			// style={{ backgroundColor: "rgb(234, 180, 16)" }} -- debugging
		>
			<Container
				fluid /* style={{ backgroundColor: "rgb(223, 140, 234)" }} -- debugging */
			>
				<Container
					style={{
						// backgroundColor: "rgb(155, 207, 239)", -- debugging
						padding: "0px",
					}}
				>
					<Row
						className="justify-content-md-between"
						// style={{ backgroundColor: "rgb(239, 182, 182)" }} -- debugging
					>
						<Col md={5}>
							<Profile />
							<Contact />
							<Interests />
						</Col>
						<Col md={7}>
							<Extended />
							<Blurb />
							<FriendsSpace2 />
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
};

export default Grid3;
