import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutus/AboutUs";
import LogIn from "../pages/LogIn/LogIn";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Aboutus",
    component: AboutUs,
  },
  {
    path: "/Login",
    component: LogIn,
  },
];
export default routes;
