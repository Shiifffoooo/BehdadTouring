import Index from "./pages/Index/Index";
import NotFound from "./pages/Not-Found/NotFound";
import Tours from "./pages/Tours/Tours";
import MainTour from "./pages/MainTour/MainTour";
import TourIndex from "./Components/TourIndex/TourIndex";
import Articles from "./pages/Articles/Articles";
import MainArticle from "./pages/MainArticle/MainArticle";
import ArticlesIndex from "./Components/ArticlesIndex/ArticlesIndex";
import ContactMe from "./pages/ContactMe/ContactMe";
import Shop from "./pages/Shop/Shop";
import ShopIndex from "./Components/ShopIndex/ShopIndex";
import MainProduct from "./pages/MainProduct/MainProduct";
import BuyingBasket from "./pages/BuyingBasket/BuyingBasket";
import Users from "./pages/Users/Users";
import Login from "./Components/Login/Login";
import SignIn from "./Components/SignIn/SignIn";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";

let routes = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Index /> },
  { path: "/contact-me", element: <ContactMe /> },
  { path: "/basket", element: <BuyingBasket /> },
  { path: "/under_construction", element: <UnderConstruction /> },

  {
    path: "/user",
    element: <Users />,
    children: [
      { path: "login", element: <Login /> },
      { path: "sign-in", element: <SignIn /> },
    ],
  },
  {
    path: "/tours",
    element: <Tours />,
    children: [
      { path: "", element: <TourIndex /> },
      { path: ":region", element: <MainTour /> },
    ],
  },
  {
    path: "/articles",
    element: <Articles />,
    children: [
      { path: "", element: <ArticlesIndex /> },
      { path: ":region", element: <MainArticle /> },
    ],
  },
  {
    path: "/shop",
    element: <Shop />,
    children: [
      { path: "", element: <ShopIndex /> },
      { path: ":nameProduct", element: <MainProduct /> },
    ],
  },
];

export default routes;
