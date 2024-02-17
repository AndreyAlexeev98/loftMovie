import { Home } from "./pages/Home";
import { SearchResult } from "./pages/SearchResult";
import { Actor } from "./pages/Actor";
import Film from "./pages/Film";
import { Favorites } from "./pages/Favorites";
import { NotFound } from "./pages/NotFound";
import Router from "./Router";
import "./styles.css";

export default function App() {
  const routes = [
    { path: "/", component: <Home /> },
    { path: "/search-results", component: <SearchResult /> },
    { path: "/actor", component: <Actor /> },
    { path: "/film", component: <Film /> },
    { path: "/favorites", component: <Favorites /> },
  ];
  const defaultComponent = <NotFound />;

  return (
    <>
      <Router routes={routes} defaultComponent={defaultComponent} />
    </>
  );
}
