import styles from "./Breakpoints.module.scss";

const Breakpoints = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.xs}>xs</div>
			<div className={styles.sm}>sm</div>
			<div className={styles.md}>md</div>
			<div className={styles.lg}>lg</div>
			<div className={styles.xl}>xl</div>
		</div>
	);
};

export default Breakpoints;
