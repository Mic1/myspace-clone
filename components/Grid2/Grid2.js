import styles from "./Grid2.module.scss";

import Row from "react-bootstrap/Row";

const Grid2 = ({ children, className, ...rest }) => {
	let gridClassName = styles.grid;
	let grid2ClassName = styles.grid2;
	// console.log("gridChildren: ", children);

	if (className) {
		gridClassName = `${gridClassName} ${className}`;
	}

	return (
		<div {...rest} className={gridClassName}>
			<div className={grid2ClassName}>
				<div style={{ display: "flex", flexDirection: "column" }}>
					{children.slice(0, 3)}
				</div>
				<div style={{ display: "flex", flexDirection: "column" }}>
					{children.slice(3, 6)}
				</div>
			</div>
		</div>
	);
};

export default Grid2;

// Rows are wrappers for columns.

// flex + wrap here + card flex-basis: auto IS NOT enough to create
// 2 columns with cards of individual lengths!
// BS = 1 row with 2 columns

// this is the foundation of our reusable component.
// it has its own scss styles.grid, and if the children are
// passed in with a className, it will add that className to the grid.
// "grid" = div with display:flex; flex-wrap:wrap; :-). There is max-width in px.
/*
.grid {
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
  max-width: 1000px;
  margin-top: 3rem;
  
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }

}
*/

/*
<Container fluid>
				<Container className="p-4">
					<Row className="justify-content-md-between">
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
*/
