import WorkCard from "../components/Work/WorkCard";
import data from '../data/work.json'
import { Container, Row, Col } from "react-bootstrap";

export default function Work() {
    return (
        <Container className="my-5">
            <h1 className="mb-4 text-center">Work Experience</h1>
            <Row xs={1} md={1} lg={2} className="g-4"> 
                {data.map((work, index) => (
                    <Col key={index}>
                        <WorkCard work={work} />
                    </Col>
                ))}
            </Row>
        </Container>

        // <Container className="my-5" style={{ backgroundColor: 'grey' }}>
        //     <h1 className="mb-4 text-center">Work Experience</h1>
        //     {data.map((work, index) => (
        //         <Row className="gy-4 align-items-centerX mb-4" key={index}>

        //             {/* <Col key={work.id} xs={12} sm={12} md={6} lg={6}> */}
        //             <WorkCard work={work} />
        //             {/* </Col> */}
        //         </Row>
        //     ))}
        // </Container>
    )
}