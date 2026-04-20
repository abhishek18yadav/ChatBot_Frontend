import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Auth from "./Pages/Auth/Auth";
import { SignupCardContainer } from "./components/Organisms/Auth/SignupCardContainer";
import { SigninCardContainer } from "./components/Organisms/Auth/SigninCardContainer";
import {Home} from "./Pages/Home/Home";
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/auth/signup" element={<Auth><SignupCardContainer /></Auth>} />
            <Route path="/auth/signin" element={<Auth><SigninCardContainer /></Auth>} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}