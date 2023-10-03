import { Outlet, RouteObject } from "react-router-dom";
import IndexPage from "../ui/pages/home/index.page";
import CartPage from "../ui/pages/home/cart.page";
import ProductDetailPage from "../ui/pages/home/product-detail";

const rootRoutes: RouteObject[] = [
    {
        path: "*",
        element: (<div>Oops! Route not found</div>)
    },
    {
        path: "/",
        element: <Outlet />,
        children: [
            {
                path: "",
                element: <IndexPage />
            },
            {
                path: "products/:id",
                element: <ProductDetailPage />
            },
            {
                path: "cart",
                element: <CartPage />
            }
        ]
    }
]

export default rootRoutes;