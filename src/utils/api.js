import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/firestore';

const config = require('./secret.json');

// Initialize Firestore
firebase.initializeApp(config);
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
const dataListRef = db.collection('dataList');

export async function fetchDataList() {
  const dataList = [];
  await dataListRef
    .get()
    .then(snapshot => snapshot.docs.map(doc => dataList.push(doc)))
    .catch(err => console.log('Error getting documents', err));
  console.log(dataList);

  return dataList;
}

export function fetchFilteredDataList(query) {
  return query;
}

// function getFriends() {
//   const friends = [];
//   const friendsRef = db.collection('friends');
//   friendsRef
//     .get()
//     .then(snapshot => snapshot.forEach(doc => friends.push(doc)))
//     .catch(err => console.log('Error getting documents', err));
//   // console.log(friends);
//   return friends;
// }

// async function getFriends() {
//   const friends = [];
//   const friendsRef = db.collection('friends');
//   const friendsSnapshot = await friendsRef.get();
//   // console.log(friendsSnapshot);
//   return friendsSnapshot;
// }

// If using async while getting friends
// try {
//     let friends = getFriends();
// }
// catch(err) {
//     console.log('Error getting documents', err)
// }

// If using normal getFriends
// let friends = getFriends();
