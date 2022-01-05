import { Route, Routes } from "react-router-dom";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";

const RoutesService = () => {
    return (
        <Routes>
            <Route path="/login" element={<SingIn />}></Route>
            <Route path="/register" element={<SingUp />}></Route>
        </Routes>
    );
};

export default RoutesService;