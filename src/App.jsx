import { useState } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Router,
} from "react-router-dom";

import RouteLayout from "./layout/RouterLayout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";

import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
