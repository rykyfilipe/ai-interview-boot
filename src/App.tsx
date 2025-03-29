/** @format */

import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import ForgotPassword from "./Components/Login/ForgotPassword";
import SignUp from "./Components/Login/SignUp";
import ChangePassword from "./Components/Login/ChangePassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/ai-interview-boot' element={<Login />} />
				<Route path='/ai-interview-boot/home' element={<Home />} />
				<Route path='/ai-interview-boot/sign-up' element={<SignUp />} />
				<Route
					path='/ai-interview-boot/login/forgot-password'
					element={<ForgotPassword />}
				/>
				<Route
					path='/ai-interview-boot/forgot-password/change-password'
					element={<ChangePassword />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
