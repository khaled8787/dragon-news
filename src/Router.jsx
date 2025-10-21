import { createBrowserRouter } from "react-router";
import Home from "./Home";
import Home2 from "./Home2";
import CategoryNews from "./CategoryNews";
import Login from "./Login";
import Register from "./Register";
import AuthLayout from "./AuthLayout";
import NewsDetails from "./NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "./Loading";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '',
                element: <Home2></Home2>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/newsDetails/:id',
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: '/*',
        element: <p>ERROR-404</p>
    }
])

export default router;