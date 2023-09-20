import { Outlet, RouteObject } from "react-router-dom";
import LoginPage from "../ui/pages/auth/login.page";

const authRoutes: RouteObject[] = [
    {
        path: "/auth",
        element: <Outlet />,
        children: [
            {
                path: "login",
                element: <LoginPage />
            }
        ]
    }
]

export default authRoutes;