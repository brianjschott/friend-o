import {Accordion, Image, Container, Col, Row} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default function FriendList() {
    return (
        <Accordion defaultActiveKey="0">
            <FriendAccordionItem key="0" />
            <FriendAccordionItem key="1"/>
            <FriendAccordionItem />
        </Accordion>
    );
}

function FriendAccordionItem() {
    return (
        
    <Accordion.Item eventKey="{key}">
        <Accordion.Header>
            
        Sam T
  
        </Accordion.Header>
        <Accordion.Body>
            Lorim ipsum 
        </Accordion.Body>
    </Accordion.Item>
    )
}