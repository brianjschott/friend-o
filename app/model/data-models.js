import {
    doc, 
    getDocs, 
    getDoc, 
    collection,
    setDoc
} from "firebase/firestore"

import {db} from "./firebaseconfig"

export async function getFriends() {
    const myCollection = collection(db, 'friends')
    const querySnapshot = await getDocs(myCollection)
    let docs = []
    if (querySnapshot.exists()) {
        querySnapshot.forEach((doc) => {
            docs.push(doc.data())
        })
        return docs
    }
    throw new Error("No collection exists with that ID")
}

//TODO: WHY AM I NOT USING MYCOLLECTION HERE?
export async function getFriend(docReference) {
    const myCollection = collection(db, 'friends')
    const querySnapshot = await getDoc(docReference)
    if (querySnapshot.exists()) {
        return querySnapshot.data()
    }
    throw new Error("Record does not exist for that doc Ref")
}

export async function addFriend(friendData) {
    await addDoc(collection(db, 'friends'), {
        friendFirstName: friendData.friendFirstName,
        friendLastName: friendData.friendLastName,
        birthday: friendData.birthday,
        interests: friendData.interests
    })
}