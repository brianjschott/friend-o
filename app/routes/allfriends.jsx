import {Accordion, Image} from 'react-bootstrap';

export default function FriendList() {
    return (
        <Accordion defaultActiveKey="0">
            <FriendAccordionItem key="0" />
            <FriendAccordionItem key="1"/>
            <FriendAccordionItem key="2"/>
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
            <Image src="" />
            Lorim ipsum 
        </Accordion.Body>
    </Accordion.Item>
    )
}