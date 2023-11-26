import {Accordion,AccordionContext,Image, ListGroup, Row, Col} from 'react-bootstrap';
import {useContext} from 'react';

export default function FriendList() {
    return (
        <Accordion defaultActiveKey="0">
            <FriendAccordionItem friendName="Sam T" ek="0" lastUpdate="12/03/22" />
        </Accordion>
    );
}

const imageStyles = {
    full: {
        maxWidth: "250px"
    },
    thumbnail: {
        maxWidth: "75px"
    }

}


function FriendAccordionItem(props) {
    return (
        <Accordion.Item eventKey={props.ek}>
            <Accordion.Header>
                <Row>
                    <Col md={6}>
                        <h1 className="display3">{props.friendName}</h1>
                    </Col>
                    <Col>
                        <em>Last Update: {props.lastUpdate}</em>
                    </Col>
                    <Col><Image className="accordion-header-image" src="https://placehold.co/100x100" roundedCircle /></Col>
                </Row>   
            </Accordion.Header>
            <Accordion.Body>
                <Row>
                    <Col sm={6}>
                   
                        <ListGroup>
                            <ListGroup.Item><strong>Birthday:</strong> December 20, 1985</ListGroup.Item>
                            <ListGroup.Item><strong>Favorite Spot:</strong> Cafes</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={3} />
                    <Col sm={3}>
                        <Image className="ms-auto accordion-body-image" src="https://placehold.co/100x100" roundedCircle />
                    </Col>
                </Row>
            </Accordion.Body>
        </Accordion.Item>
    )
}