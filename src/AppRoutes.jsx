import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Auth from "./Pages/Auth/Auth";
import { SigninCard } from "./components/Organisms/Auth/SigninCard";
import { SignupCard } from "./components/Organisms/Auth/SignupCard";
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/auth/signin" element={<Auth><SigninCard /></Auth>} />
            <Route path="/auth/signup" element={<Auth><SignupCard /></Auth>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}