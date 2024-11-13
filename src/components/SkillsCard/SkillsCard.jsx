import Card from 'react-bootstrap/Card';
import './SkillsCard.css'


export default function SkillCard({ name, image }) {
    return (
        // <Card className="skill-card border-secondary rounded-lg text-center shadow-sm" style={{ width: '8rem' }}>
        //     <Card.Img variant="top" src={image} alt={name} className="mb-2" />
        //     <Card.Body>
        //         <Card.Text>{name}</Card.Text>
        //     </Card.Body>

        <Card className="skill-card text-center" style={{ width: '8rem' }}>
            <div className="image-container">
                <Card.Img className='mb-2' variant="top" src={image} alt={name} />
            </div>
            <Card.Text>{name}</Card.Text>
        </Card>
    )
}