import styles from "./CardProto2.module.scss";

const CardProto2 = ({ children, className, ...rest }) => {
	let cardClassName = styles.card;
	// console.log("cn: ", cardClassName);

	if (className) {
		cardClassName = `${cardClassName} ${className}`;
		// console.log("cn2: ", cardClassName);
	}

	return (
		<div {...rest} className={cardClassName}>
			{children}
		</div>
	);
};

export default CardProto2;
