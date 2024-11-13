import { Card } from "react-bootstrap"
import { Col, Row } from "react-bootstrap";
import './WorkCard.css'

export default function WorkCard({ work }) {
    console.log(work)
    return (
        <>
            <Card className="d-flex flex-column h-100 shadow-sm work-card">
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Row className="align-items-start">
                        <Col xs={3} md={2}>
                                <Card.Img className="company-logo mb-3" variant="top" src={work.logo} alt={`${work.companyName} logo`} />
                        </Col>
                        <Col xs={9} md={10} className="text-left">
                            <Card.Title>{work.companyName}</Card.Title>
                            <Card.Subtitle className="mb-2 fw-normal">{work.designation}</Card.Subtitle>
                            <p className="text-uppercase">{work.period}</p>
                            <Card.Text className="text-justify">{work.about}</Card.Text>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>

            {/* <Col className="logo-col" key={work.id} xs={6} md={1} >
                <div className="logo-container p-2">
                    <img
                        src={work.logo}
                        alt={`${work.companyName} logo`}
                        className="company-logo"
                    />
                </div>
            </Col>

            <Col key={work.id} xs={6} md={6} className="text-center text-md-start">
                <h6>{work.companyName}</h6>
                <h6 className="fw-normal">{work.designation}</h6>

                <p className="text-muted text-uppercase">
                    {work.period}
                </p>
                <p className="text-justify">{work.about}</p>
            </Col> */}

        </>
    )
}