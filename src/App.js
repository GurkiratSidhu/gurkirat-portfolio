import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Footer from "./Footer";
import { ThemeProvider } from "./themeContext";

function App() {
	return (
		<div className="transition-all duration-1000 App dark:bg-gray-800">
			<>
				<div className="mx-4 md:mx-10">
					<ThemeProvider>
						<Nav />

						<Header />
						<Projects />
						<Skills />
						<Experience />
						<Footer />
					</ThemeProvider>
				</div>
			</>
		</div>
	);
}

export default App;
