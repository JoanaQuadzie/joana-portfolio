import { projectList } from "../data"

export function getProject(projectId) {
    const project = projectList.find((project) => project.id == projectId)
    return project
}