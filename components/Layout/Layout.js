import { Fragment } from "react";
import Head from "next/head";

import styles from "./Layout.module.scss";
import Navbar from "../Navbar/Navbar1";

const Layout = (props) => {
	return (
		<Fragment>
			<Head>
				<title>MySpace</title>
				<meta charSet="utf-8"></meta>
			</Head>

			<div>
				<Navbar />
				<div id="div-layout" className={styles.layout}>
					{props.children}
				</div>
			</div>
		</Fragment>
	);
};

export default Layout;
