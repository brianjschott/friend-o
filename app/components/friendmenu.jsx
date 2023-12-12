import {Accordion,AccordionContext,Image, ListGroup, Row, Col} from 'react-bootstrap';
import {json} from '@remix-run/node'

export default function FriendList() {

        const data = useLoaderData();
        console.log("Data is " + data)
        let accordionItemList = []
        data.forEach((friend, index) => {
            accordionItemList.push(<FriendAccordionItem friendName="{friend.friendFirstName}" ek="{index}" lastUpdate="12/03/22" />)
        })


        return (
            <Accordion defaultActiveKey="0">
                {accordionItemList}
            </Accordion>
        );
}

function FriendAccordionItem(props) {
    return (
        <Accordion.Item eventKey={props.ek}>
            <Accordion.Header as="Row">
                <Col md={1}><Image className="accordion-header-image" src="https://placehold.co/100x100" roundedCircle /></Col>
                <Col className="p-2" md={3}>
                    <h2>{props.friendName}</h2>
                </Col>
                <Col md={3}>
                    <i className="bi bi-person-vcard" alt="Info"></i>
                    <i className="bi bi-person-fill-up" alt="Info"></i>
                    <i className="bi bi-person-fill-dash" alt="Info"></i>
                    <i className="bi bi-person-fill-down" alt="Info"></i>
                    <i className="bi bi-person-fill-gear" alt="Info"></i>

                </Col>
                <Col md={3}>
                    <em>Last Update: {props.lastUpdate}</em>
                </Col>

            </Accordion.Header>
            <Accordion.Body>
                <Row>
                    <Col className="p-3" md={{span: 4, order: 2, offset: 1}}>
                            <Image className="ms-auto accordion-body-image" src="https://placehold.co/250x250" fluid roundedCircle />
                    </Col>
                    <Col md={{ span: 6, order: 1}}>
                        <ListGroup>
                            <ListGroup.Item><strong>Birthday:</strong> December 20, 1985</ListGroup.Item>
                            <ListGroup.Item><strong>Favorite Spot:</strong> Cafes</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Accordion.Body>
        </Accordion.Item>
    )
}