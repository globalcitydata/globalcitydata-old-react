import firebase from 'firebase/app';
import 'firebase/firestore';

const config = require('./secret.json');

// Initialize Firestore
firebase.initializeApp(config);
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
const dataListRef = db.collection('dataList');
const publicationsRef = db.collection('publications');
const tagsRef = db.collection('tags');

export async function fetchPublications() {
  const publications = [];
  try {
    const snapshot = await publicationsRef.get();
    snapshot.docs.map(doc => publications.push(doc.data()));
  } catch (err) {
    throw new Error('Error getting publications.', err);
  }
  console.log(publications);
  return publications;
}

export async function fetchDataList() {
  const dataList = [];
  try {
    const snapshot = await dataListRef.get();
    snapshot.docs.map(doc => dataList.push(doc.data()));
  } catch (err) {
    throw new Error('Error getting data.', err);
  }
  return dataList;
}

export async function fetchPublishedDataList() {
  const dataList = [];
  try {
    const snapshot = await dataListRef.where('published', '==', true).get();
    snapshot.docs.map(doc => dataList.push(doc.data()));
  } catch (err) {
    throw new Error('Error getting published data.', err);
  }
  return dataList;
}

export async function queryData() {
  try {
    const queryDoc = await tagsRef.doc('outcomes').get();
    // queryDoc.docs.map(doc => console.log(doc.data()));
    console.log(queryDoc.data());
  } catch (err) {
    throw new Error('Error querying for data.', err);
  }
}

export async function addData(data) {
  try {
    await dataListRef.doc(data.title).set(data);
  } catch (err) {
    throw new Error('Error adding data', err);
  }
}

export function fetchFilteredDataList(query) {
  return query;
}
