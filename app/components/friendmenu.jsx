import {Accordion,Image} from 'react-bootstrap';

export default function FriendList() {
    return (
        <Accordion defaultActiveKey="0">
            <FriendAccordionItem friendName="Sam" ek="0" />
            <FriendAccordionItem friendName="Sophie" ek="1"/>
            <FriendAccordionItem ek="2"/>
        </Accordion>
    );
}

function FriendAccordionItem(props) {
    return (
        <Accordion.Item eventKey={props.ek}>
            <Accordion.Header>       
            {props.friendName} {props.ek}
            </Accordion.Header>
            <Accordion.Body>
                <Image src="" />
                Lorim ipsum 
            </Accordion.Body>
        </Accordion.Item>
    )
}