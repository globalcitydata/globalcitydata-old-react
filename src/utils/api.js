import firebase from 'firebase/app';
import 'firebase/firestore';

const config = require('./secret.json');

// Initialize Firestore
firebase.initializeApp(config);
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
const dataListRef = db.collection('dataList');
const tagsRef = db.collection('tags');

export async function fetchDataList() {
  const dataList = [];
  try {
    const snapshot = await dataListRef.get();
    snapshot.docs.map(doc => dataList.push(doc.data()));
  } catch (err) {
    throw new Error('Error getting documents', err);
  }

  return dataList;
}

export async function fetchPublishedDataList() {
  const dataList = [];
  try {
    const snapshot = await dataListRef.where('published', '==', true).get();
    snapshot.docs.map(doc => dataList.push(doc.data()));
  } catch (err) {
    throw new Error('Error getting documents', err);
  }

  return dataList;
}

export async function queryData() {
  try {
    const queryDoc = await tagsRef.doc('outcomes').get();
    // queryDoc.docs.map(doc => console.log(doc.data()));
    console.log(queryDoc.data());
  } catch (err) {
    throw new Error('error with query baby', err);
  }
}

export async function addData(data) {
  try {
    await dataListRef.doc(data.title).set(data);
  } catch (err) {
    throw new Error('Error getting documents', err);
  }
}

export function fetchFilteredDataList(query) {
  return query;
}
