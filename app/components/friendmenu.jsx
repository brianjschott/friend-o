import {Accordion,Image, Stack, ListGroup, Row, Col} from 'react-bootstrap';

export default function FriendList() {
    return (
        <Accordion defaultActiveKey="0">
            <FriendAccordionItem friendName="Sam" ek="0" />
            <FriendAccordionItem friendName="Sophie" ek="1"/>
            <FriendAccordionItem ek="2"/>
        </Accordion>
    );
}

const imageStyleThumbnail = {
    "maxWidth": "100px"

}

function FriendAccordionItem(props) {
    return (
        <Accordion.Item eventKey={props.ek}>
            

            <Accordion.Header>
                <h1 className="display3">
            {props.friendName} {props.ek}
                </h1>       
            </Accordion.Header>
            <Accordion.Body>
                <Row>
                    <Col sm={6}>
                   
                        <ListGroup>
                            <ListGroup.Item><strong>Birthday:</strong> December 20, 1985</ListGroup.Item>
                            <ListGroup.Item><strong>Birthday:</strong> December 20, 1985</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={3} />
                    <Col sm={3}>
                        <Image className="ms-auto" src="https://placehold.co/100x100" roundedCircle style={imageStyleThumbnail} />
                    </Col>
                </Row>
            </Accordion.Body>
        </Accordion.Item>
    )
}