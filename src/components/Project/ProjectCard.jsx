import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './ProjectCard.css'

export default function ProjectCard({ project }) {
    return (
        <Card className="d-flex flex-row m-3 shadow-sm p-1">
            <Card.Img variant="left" src={project.image} className="project-image d-none d-lg-block" />
            <Card.Body>
                <div className='mb-3'>
                    {project.technologies.map((tech) => (
                        <span className="badge badge-tech me-2" key={tech}>
                            {tech}
                        </span>
                    ))}
                </div>
                <Card.Title className='fs-5 fw-medium'>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="d-flex align-items-center mt-5">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="me-3">
                        <FontAwesomeIcon icon={faGithub} size="lg" className="icon me-2" />
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="md" className="icon" />
                    </a>
                </div>
            </Card.Body>
        </Card>

        // <Card className="p-0 m-1">
        //     <Card.Img variant="top" src={project.image} />
        //     <Card.Body >
        //         <Card.Title className='fs-5 fw-normal'>{project.title}</Card.Title>
        //         <Card.Text>{project.description}</Card.Text>
        //         {/* <Button variant="primary"><i className="fa fa-spinner fa-spin"></i></Button> */}
        //         <div className="d-flex justify-content-left align-items-center">
        //             <a
        //                 href={project.repoLink}
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 className='me-3'
        //             >
        //                 <FontAwesomeIcon className="icon me-2" icon={faGithub} size="md" />
        //             </a>
        //             <a
        //                 href={project.demoLink}
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare} size="md" />
        //             </a>
        //         </div>
        //     </Card.Body>
        //     <Card.Footer className="d-flex justify-content-left">
        //         <ul className="mb-0 p-0">
        //             {project.technologies.map((tech) => (
        //                 <li className="list-inline-item" key={tech}>
        //                 <span className="badge bg-secondary">{tech}</span>
        //               </li>
        //             ))}
        //         </ul>
        //     </Card.Footer>
        // </Card>
    )
}