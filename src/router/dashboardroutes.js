
import Home from '../pages/home/Home';
import NewHomePage from '../pages/home/NewHomePage';
import SearchCases from '../pages/search/Search';
import Cases from '../pages/cases/Cases';
import Registration from '../pages/registration/Registration';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
    {
        path: "/layout/home",
        component: NewHomePage,
    },
    {
        path: "/layout/search",
        component: SearchCases,
    },
    {
        path: "/layout/cases",
        component: Cases,
    },
    {
        path: "/layout/registration",
        component: Registration,
    },
    {
        default: '/',
        component: NewHomePage
    },
    
];

export default routes;