import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import { ThemeProvider } from "./themeContext";

function App() {
	return (
		<div className="transition-all duration-1000 App dark:bg-gray-800">
			<>
				<ThemeProvider>
					<Nav />

					<Header />
				</ThemeProvider>
			</>
		</div>
	);
}

export default App;
