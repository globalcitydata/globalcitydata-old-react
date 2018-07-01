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
  const snapshot = await dataListRef.get();
  try {
    snapshot.docs.map(doc => dataList.push(doc.data()));
  } catch (err) {
    throw new Error('Error getting documents', err);
  }

  return dataList;
}

export function fetchFilteredDataList(query) {
  return query;
}
