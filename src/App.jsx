import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home"
import { Products } from "./pages/products"
import { Details } from "./pages/details"
import { Favorites } from "./pages/favorites"
import { Cart } from "./pages/cart"
import { useStore } from "./store/bookStore";
import { useEffect } from "react";
import { Layout } from "./components/layout/layout";
import { Error404 } from "./pages/error404";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/products",
                children: [
                    {
                        index: true,
                        element: <Error404/>
                    },
                    {
                        path: ":page",
                        element: <Products/>,
                    },
                    {
                        path: "all/:id",
                        element: <Details/>,
                    }
                ]
            },
            {
                path: "/favorites",
                element: <Favorites/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
            {
                path: "*",
                element: <Error404/>
            }
        ]
    }
])

function App() {
    const fetchInitialData = useStore(state => state.fetchInitialData);

    useEffect(() => {
        fetchInitialData();
    }, [fetchInitialData])

    return (
        <RouterProvider router={router}/>
    )
}

export default App
