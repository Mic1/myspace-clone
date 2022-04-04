import Head from "next/head";

import Container from "../components/Container";
import Main from "../components/Main";
import Grid3 from "../components/Grid3";
import CardProto2 from "../components/CardProto2";

import Profile from "../components/Profile/Profile";
import Contact from "../components/contact/contact";
import Interests from "../components/interests/interests";
import Extended from "../components/extended/extended";
import Blurb from "../components/Blurb/Blurb";
import FriendsSpace2 from "../components/friendsSpace2/friendsSpace2";

import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<Container id="cntr-srch">
			<Head>
				<title>MySpace</title>
				<link rel="icon" href="/favicon.ico" />

				<meta name="description" content="Sass Stuff!"></meta>
			</Head>

			<Main
				className={styles.homeMain}
				id="search-main"
				style={{
					// backgroundColor: "rgb(198, 242, 77)", -- debugging
					marginTop: "0px",
				}}
			>
				<Grid3>
					<CardProto2>
						<Profile />
					</CardProto2>
					<CardProto2>
						<Contact />
					</CardProto2>
					<CardProto2>
						<Interests />
					</CardProto2>
					<CardProto2>
						<Extended />
					</CardProto2>
					<CardProto2>
						<Blurb />
					</CardProto2>
					<CardProto2>
						<FriendsSpace2 />
					</CardProto2>
				</Grid3>
			</Main>
		</Container>
	);
}
