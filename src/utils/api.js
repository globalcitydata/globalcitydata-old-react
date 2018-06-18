import firebase from 'firebase/app';
import 'firebase/firestore';
var config = require('./secret.json');

// Initialize Firestore
firebase.initializeApp(config);
export const db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

function getFriends() {
    let friends = [];
    let friendsRef = db.collection('friends');
    friendsRef.get()
        .then(snapshot => snapshot.forEach(doc => friends.push(doc)))
        .catch(err => console.log('Error getting documents', err))
    // console.log(friends);
    return friends;
}

async function getFriends() {
    let friends = [];
    let friendsRef = db.collection('friends');
    let friendsSnapshot = await friendsRef.get();
    // console.log(friendsSnapshot);
    return friendsSnapshot;
}

// If using async while getting friends
    // try {
    //     let friends = getFriends();
    // }
    // catch(err) {
    //     console.log('Error getting documents', err)
    // }

// If using normal getFriends
    // let friends = getFriends();
