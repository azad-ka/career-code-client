import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import PrivateRoute from "../routes/PrivateRoute";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import ViewApplication from "../pages/ViewApplication/ViewApplication";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/jobDetails/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
                Component: JobDetails,
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
                path: 'addJobs',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: '/myApplications',
                element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            },
            {
                path: '/myPostedJobs',
                element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
            },
            {
                path: '/applications/:id',
                element: <PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path: '/login',
                Component: SignIn,
            }
        ]
    },
]);

export default router;