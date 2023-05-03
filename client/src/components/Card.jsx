import { Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const CardComponent = ({ title, content, author }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../assets/city.jpg')} /> 
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
                <Card.Subtitle>{author}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default CardComponent;
