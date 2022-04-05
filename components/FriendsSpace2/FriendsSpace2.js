import { useState } from "react";

import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

import styles from "./FriendsSpace2.module.scss";

import dogs from "../../data/dogs.json";
import cats from "../../data/cats.json";

function FriendsSpace2() {
	const [viewText, setViewText] = useState("View Andy's Enemies");
	const [isFriends, setIsFriends] = useState(1);
	const [data, setData] = useState(dogs);

	const handleView = () => {
		setIsFriends(!isFriends);
		setViewText(isFriends ? "View Andy's Friends" : "View Andy's Enemies");
		setData(isFriends ? cats : dogs);
	};

	return (
		<Container fluid>
			<header className={styles.mainSectionHeader}>
				<h4 className={styles.mainSectionSubHeader}>
					Andy's Friend Space
				</h4>
			</header>
			<Row>
				{data
					.filter((item) => item.id < 4)
					.map((item) => {
						const urlString = "images/" + item.image;
						return (
							<Col
								xs={6}
								sm={3}
								md={3}
								className={styles.col}
								key={item.id}
							>
								<Card className={styles.card}>
									<Card.Body>
										<Card.Title className={styles.title}>
											{item.name}
										</Card.Title>
										<Image
											fluid
											src={urlString}
											alt={item.alt}
										/>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
			</Row>
			<Row className={styles.row}>
				{data
					.filter((item) => item.id > 3)
					.map((item) => {
						const urlString = "images/" + item.image;
						return (
							<Col
								xs={6}
								sm={3}
								md={3}
								className={styles.col}
								key={item.id}
							>
								<Card className={styles.card}>
									<Card.Body>
										<Card.Title className={styles.title}>
											{item.name}
										</Card.Title>
										<Image fluid src={urlString} />
									</Card.Body>
								</Card>
							</Col>
						);
					})}
			</Row>

			<div className={styles.view}>
				<Button onClick={handleView}>{viewText}</Button>
			</div>
		</Container>
	);
}

export default FriendsSpace2;
