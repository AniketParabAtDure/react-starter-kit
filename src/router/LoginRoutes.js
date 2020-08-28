
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';

/** */

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/Home",
      component: Home
    },
    {
      default: '/',
      component: Login
    },
    
];

export default routes;