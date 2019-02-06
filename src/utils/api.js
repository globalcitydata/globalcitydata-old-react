import firebase from 'firebase/app';
import 'firebase/firestore';

const config = require('./secret.json');

// Initialize Firestore
firebase.initializeApp(config);
const db = firebase.firestore();
let dataListRef = db.collection('dataList');
if (process.env.NODE_ENV === 'development') {
  dataListRef = db.collection('testDataList');
}

export async function getDataRef(dataRef) {
  const snapshot = await dataRef.get();
  return snapshot.data();
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

// BEGINNING OF QUERY IMPLEMENTATION FROM DATABASE:

// async function getAllDataFromSnapshot(snapshot) {
//   const documents = [];
//   snapshot.docs.map(doc => documents.push(doc.data()));
//   const dataRefs = [];
//   documents.map(({ dataRef }) => dataRefs.push(getDataRef(dataRef)));
//   const dataList = await Promise.all(dataRefs);
//   return new Set(dataList);
// }

// const inSet = (data, set) => {
//   const values = set.values();
//   let done = false;
//   while (!done) {
//     const next = values.next();
//     if (next.done) done = true;
//     else if (next.value.title === data.title) return true;
//   }
//   return false;
// };

// export async function queryData(query) {
//   let dataList = new Set();
//   const queryEntries = Object.entries(query);
//   try {
//     for (const dropDown of queryEntries) {
//       const tag = dropDown[0];
//       const attrs = dropDown[1];
//       let innerDataList = new Set();
//       for (const attr of attrs) {
//         const attributeSnapshot = await tagsRef.doc(tag).collection(attr).get();
//         const set = await getAllDataFromSnapshot(attributeSnapshot);
//         innerDataList = new Set([...innerDataList, ...set]);
//         // console.log('innerdataList', innerDataList);
//       }
//       if (dataList.size === 0) dataList = new Set([...dataList, ...innerDataList])
//       else dataList = new Set([...dataList].filter(data => inSet(data, innerDataList)));
//       // dataList = new Set([...dataList, ...innerDataList]);
//     }
//   } catch (err) {
//     throw new Error('Error querying for data.', err);
//   }
//   return [...dataList];
// }
