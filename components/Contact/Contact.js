import React from "react";

import ContactItem from "../ContactItem/ContactItem";

import { Row, Col, Card, ListGroup } from "react-bootstrap";

import contactingData from "../../data/contacting.json";

import styles from "./Contact.module.scss";

function Contact() {
	return (
		<Card className={styles.card}>
			<Card.Header className={styles.cardHeader}>
				Contacting Andy
			</Card.Header>
			<Card.Body>
				<Row>
					<Col md={12} lg={6}>
						<ListGroup>
							{contactingData.contactingData.contact
								.filter((contact) => contact.key < 4)
								.map((item, index) => {
									return (
										<ContactItem item={item} key={index} />
									);
								})}
						</ListGroup>
					</Col>
					<Col md={12} lg={6} className={styles.col}>
						<ListGroup>
							{contactingData.contactingData.contact
								.filter((contact) => contact.key > 3)
								.map((item, index) => {
									return (
										<ContactItem item={item} key={index} />
									);
								})}
						</ListGroup>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}

export default Contact;
