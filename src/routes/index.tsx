import { createBrowserRouter } from "react-router-dom";
import rootRoutes from "./root";
import authRoutes from "./auth";

// creating app routing using RouterProvider. See more information: https://reactrouter.com/en/main/routers/router-provider
// don't create routes here, only import routing list and pass using ...
export default createBrowserRouter([    
    ...rootRoutes,
    ...authRoutes
]);