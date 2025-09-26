import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../pages/RootLayout";
import ProductDetails from "../pages/productDetails";
export const router = createBrowserRouter([
 {
   path: "/",
   Component: RootLayout,
   children: [
    {
     path: "/",
     Component: Home,
    },
    {
      path: "/product-details",
      Component: ProductDetails,
    },
   ],
 },
]);