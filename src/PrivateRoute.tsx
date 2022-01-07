import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isAuth = IsAuth();

    if (!isAuth) {
        return <Navigate to="/login" />
    }

    return children;
}

export const IsAuth = (token?: string) => {
    const [cookies] = useCookies(['token']);

    if (cookies.token) {
        return true
    } else {
        return false
    }

}

export const IsAuthOutlet = ({ children }: PrivateRouteProps) => {
    const isAuth = IsAuth();

    if (isAuth) {
        return <Navigate to="/" />
    }

    return children
}