import React from "react";

import { Row, Col, Card, Image, ListGroup } from "react-bootstrap";

import styles from "./Profile.module.scss";

function Profile() {
	return (
		<Card className={styles.profCard}>
			<Card.Header className={styles.cardHeader}>Andy</Card.Header>
			<Card.Body>
				<Row>
					<Col>
						<Image
							src="/images/andycapp.jpg"
							className="img-fluid"
						></Image>
					</Col>
					<Col>
						<ListGroup className={styles.listGroup} variant="flush">
							<ListGroup.Item className={styles.item}>
								Male
							</ListGroup.Item>
							<ListGroup.Item className={styles.item}>
								65 years old
							</ListGroup.Item>
							<ListGroup.Item className={styles.item}>
								Hartlepool
							</ListGroup.Item>
							<ListGroup.Item className={styles.item}>
								County Durham
							</ListGroup.Item>
							<ListGroup.Item className={styles.item}>
								UK
							</ListGroup.Item>
							<ListGroup.Item className={styles.item}>
								Last Login:
							</ListGroup.Item>
							<ListGroup.Item className={styles.item}>
								7/1/1957
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}

export default Profile;
