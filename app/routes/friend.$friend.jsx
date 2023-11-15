import {json} from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";


export const loader = async ({params}) => {
        return json({
            friendName: params.friend
        }
    )
}

export default function FriendView() {
    const friendData = useLoaderData();
    return (
        
        <div>
            <h2>My Bestie: {friendData.friendName}</h2>
        </div>
    )
}