import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>

      {projects.map((p) => (
        <div key={p.id}>
          <Link to={`/projects/${p.id}`}>
            <h2>{p.title}</h2>
          </Link>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}
