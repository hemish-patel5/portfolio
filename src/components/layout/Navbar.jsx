import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>Hemish Patel</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
