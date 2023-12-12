import {db} from './../model/firebaseconfig'
import {collection, getDocs} from 'firebase/firestore/lite'
import {useLoaderData} from '@remix-run/react'
import {ListGroup} from 'react-bootstrap'

export let loader = async () => {

    return docs
}

export default function Index() {

    const data = useLoaderData()[0]
    //return our root components
    const firstInitial = data.friendLastName.substring(0, 1)
    const interests = data.interests
    const unix_timestamp = data.birthday.seconds * 1000
    const birthday = new Date(unix_timestamp)
    let interestComponents = []
    interests.forEach((interest, index) => {

        interestComponents.push(<ListGroup.Item key="{index}">{interest}</ListGroup.Item>)
    })
    return (
        <div>
            <h1>My Friend: {data.friendFirstName} {firstInitial}</h1>
            <h3>Birthday: {birthday.getMonth()+1}/{birthday.getDate()}/{birthday.getFullYear()}</h3>
            <h4>My Interests</h4>
            <ul>
                <ListGroup>
                {interestComponents}
                </ListGroup>
            </ul>
        </div>
    );
}