// partly cloned from another Tom MySpace project:

import styles from "./Blurb.module.scss";

import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";

export default function Blurb() {
	return (
		<section className={styles.blurb}>
			<header className={styles.mainSectionHeader}>
				<h3 className={styles.mainSectionH2}>Andy's Blurbs</h3>
			</header>
			<h3 className={styles.blurbsH3}>About me:</h3>
			<p className={styles.blurbsP}>
				I am a working-class figure who never <i>actually</i> works.
				Send me a message by <b>pigeon</b> if you're confused by
				anything.{" "}
				<span className={styles.info}>
					Before asking me a question, please check the{" "}
					<a href="#">PUB</a> to see if I need another pint.
				</span>
			</p>
			<p className={styles.blurbsP}>
				I may come across sometimes as lazy, freeloading, belligerent,
				and confrontational, but I really am a loveable character with a
				rich social life.
			</p>
			<p className={styles.blurbsP}>
				<strong>
					I am a dedicated follower of fashion, and my checked cap is
					recognized the world over!
				</strong>
			</p>
			<Figure className={styles.figure}>
				<FigureCaption className={styles.figurecaption}>
					A shameless plug ...{" "}
				</FigureCaption>

				<FigureImage
					className={styles.figureimage}
					width={50}
					height={50}
					alt="shameless plug"
					src="/images/shameless_plug.png"
				/>
			</Figure>

			<p className={styles.blurbsP}>
				"Andy Capp's fries look like french fries, but crunch like
				chips. These unique alternatives to regular potato chips pack a
				powerful flavor punch in every crunch. Choose from Cheddar, Hot
				Chili Cheese and the ever-popular Hot Fries — all with 0 grams
				of trans fat per serving".
			</p>
			<h3 className={styles.blurbsH3}>Who I'd like to meet:</h3>
			<p className={styles.blurbsP}>
				I'd like to meet people who know how to cook, do not like bingo,
				are giving away furniture and can spare a couple o' bob.{" "}
			</p>
		</section>
	);
}
