import {
	Container,
	Grid,
	Table,
	Row,
	Col,
	Card,
	ListGroup,
} from "react-bootstrap";

import styles from "./Interests.module.scss";

function Interests() {
	return (
		<Card className={styles.card}>
			<Card.Header className={styles.cardHeader}>
				Andy's Interests
			</Card.Header>
			<Card.Body className={styles.cardBody}>
				<Row>
					<Col className={styles.columnGray1}>
						<p>General</p>
					</Col>
					<Col className={styles.columnGray2}>
						<p>
							Pigeon Racing, Darts, Snooker, Football (fighting),
							Cricket, Rugby, Betting, Drinking, Fishing, Poker,
							Loafing, Napping,
						</p>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}

export default Interests;
