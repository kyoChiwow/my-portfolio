import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ViewDetails from "../Components/ViewDetails";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/viewdetails/:id",
        element: <ViewDetails></ViewDetails>
    }
])

export default Routes;