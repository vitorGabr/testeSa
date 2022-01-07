import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import { IsAuthOutlet, PrivateRoute } from "./PrivateRoute";

const RoutesService = () => {

    return (
        <Routes>
            <Route path="/login" element={<IsAuthOutlet children={<SingIn />} />}></Route>
            <Route path="/register" element={<IsAuthOutlet children={<SingUp />} />}></Route>
            <Route path="/forgot-password" element={<ForgotPassword />}></Route>
            <Route path="/" element={<PrivateRoute children={<Home />} />}></Route>
        </Routes>
    );
};

export default RoutesService;