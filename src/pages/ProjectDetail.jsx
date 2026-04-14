import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>Not found</p>;
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.details}</p>
    </div>
  );
}
