import SkillCard from "../components/SkillsCard/SkillsCard"
import data from "../data/skills.json"
import { Container, Row, Col } from "react-bootstrap";


export default function skills() {
    return (
        <Container className="py-5">
            <h1 className="mb-4 text-center">Skills</h1>
            <Row xs={2} sm={3} md={4} lg={6} className="g-3 justify-content-center">
                {data.map((skill) => (
                    <Col key={skill.name}>
                        <SkillCard name={skill.name} image={skill.image} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
