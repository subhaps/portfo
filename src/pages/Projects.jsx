import ProjectCard from "../components/Project/ProjectCard";
import data from '../data/projects.json'
import { Container, Row, Col } from "react-bootstrap";

export default function Project() {
    return (
        <Container className="my-5">
           <h1 className="text-center mb-4">Projects</h1>
           <Row xs={1} md={2} lg={2} className="g-4">
                {data.map((project) => (
                    <Col key={project.title} className="text-start">
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}