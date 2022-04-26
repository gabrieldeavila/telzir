import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// using lazy to avoid loading the component until it is needed
const Home = lazy(() => import("../pages/Home"));

export default function RoutesWrapper() {
  return (
    <Suspense fallback="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Suspense>
  );
}
