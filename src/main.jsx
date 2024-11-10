import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home.jsx";
import Simple from "./components/Simple.jsx";
import KeyFrame from "./components/KeyFrame.jsx";
import ButtonTap from "./components/ButtonTap.jsx";
import TextMotion from "./components/TextMotion.jsx";
import TransitionType from "./components/TransitionType.jsx";
import Counter from "./components/Counter.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";
import Variants from "./components/Variants.jsx";
import Stagger from "./components/Stagger.jsx";
import ErrorPage from "./App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} exact />
      <Route path="/simple" element={<Simple />} />
      <Route path="/keyframe" element={<KeyFrame />} />
      <Route path="/button-tap" element={<ButtonTap />} />
      <Route path="/text-motion" element={<TextMotion />} />
      <Route path="/transition" element={<TransitionType />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/ScrollReveal" element={<ScrollReveal />} />
      <Route path="/variants" element={<Variants />} />
      <Route path="/stagger" element={<Stagger />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
