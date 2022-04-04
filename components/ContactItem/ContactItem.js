import React from "react";
import Link from "next/link";

import styles from "./ContactItem.module.scss";

function ContactItem({ item }) {
	return (
		<Link href={item.route} className={styles.item}>
			<a className={styles.item}>
				<svg
					className={styles.itemsvg}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d={item.d}
					/>
				</svg>
				<span>
					<small>{item.label}</small>
				</span>
			</a>
		</Link>
	);
}

export default ContactItem;
