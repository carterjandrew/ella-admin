import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Root from "./layouts/root";
import Forms from "./pages/forms";
import FormEditor from "./pages/formEditor";
import Form from "./layouts/form";
import Articles from "./pages/articles";
import ArticleCard from "./components/articleCard";
import ArticleEditor from "./pages/articleEditor";
import SignUp from "./pages/signup";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/ella'
					element={<Root />}
				>
					<Route path='forms/' element={<Form />}>
						<Route index element={<Forms />} />
						<Route path=':panelID' element={<FormEditor />} />
					</Route>
					<Route path='articles/' element={<Outlet />}>
						<Route index element={<Articles />} />
						<Route path=':articleID' element={<ArticleEditor />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
