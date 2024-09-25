import { projectList } from "../data";
import Projects from "../components/projects";

export default function ProjectListPage() {
  return <Projects projectList={projectList} />;
}
