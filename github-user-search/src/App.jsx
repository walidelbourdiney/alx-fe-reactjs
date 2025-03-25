import "./App.css";
import Home from "./components/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
