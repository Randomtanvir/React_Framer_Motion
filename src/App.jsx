import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Simple from "./components/Simple";
import KeyFrame from "./components/KeyFrame";
import ButtonTap from "./components/ButtonTap";
import TextMotion from "./components/TextMotion";
import TransitionType from "./components/TransitionType";
import Counter from "./components/Counter";
import ScrollReveal from "./components/ScrollReveal";
import Variants from "./components/Variants";
import Stagger from "./components/Stagger";
import Home from "./Home";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} exact>
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
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
