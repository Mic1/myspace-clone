import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	// https://nextjs.org/docs/advanced-features/custom-document
	// needed for libraries like CSS-in-JS to support server-side rendering

	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		// console.log("initialProps: ", initialProps);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<body /* style={{ backgroundColor: "rgb(242, 237, 237)" }} -- debug */
				>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
