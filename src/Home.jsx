import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <ul className="flex flex-col text-2xl">
          <Link to="/simple">simple</Link>
          <Link to="/keyframe">keyframe</Link>
          <Link to="/button-tap">button-tap</Link>
          <Link to="/text-motion">text-motion</Link>
          <Link to="/transition">transition</Link>
          <Link to="/counter">counter</Link>
          <Link to="/ScrollReveal">scroll</Link>
          <Link to="/variants">variants</Link>
          <Link to="/stagger">stagger</Link>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
