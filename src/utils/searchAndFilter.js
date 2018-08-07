/*
 * Used as lambda function by search function
 * Parameters: (dataDetail: data object, query: string)
 * Returns: boolean (whether or not query inside text of object)
*/
function lambdaSearch(dataDetail, myQuery) {
  const entries = Object.entries(dataDetail);
  for (const entry of entries) {
    // console.log(typeof entry[1]);
    if (typeof entry[1] === 'string') {
      if (entry[1].toLowerCase().includes(myQuery.toLowerCase())) return true;
    } else if (entry[1].constructor === Array) {
      for (const field of entry[1]) {
        if (field.toLowerCase().includes(myQuery.toLowerCase())) return true;
      }
    }
  }
  return false;
}

/*
 * Called by full text search in home page
 * Parameters: (dataList: data object list, query: string)
 * Returns: list of relevant data
*/
export function search(dataList, myQuery) {
  return dataList.filter(data => lambdaSearch(data, myQuery));
}

/*
 * Used as lambda function by query function
 * Outside uses AND logic, inside uses OR logic
   * (all tags in object have at least one match at 'true')
 * Parameters: (dataDetail: data object, myQuery: object (state of query form))
 * Returns: boolean (whether or not query match)
*/
function lambdaQuery(dataDetail, myQuery) {
  const entries = Object.entries(myQuery);
  for (const group of entries) {
    const groupName = group[0];
    const tags = group[1];
    // if field in query, initialize match at false
    // and set to true only if matching field in dataDetail
    let match = myQuery[groupName].length === 0;
    for (const tag of tags) {
      if (dataDetail[groupName].includes(tag)) match = true;
    }
    if (!match) return false;
  }
  // we gotta match. UNLOCK DA SWAG
  return true;
}

/*
 * Called by query button in home page
 * Parameters: (dataList: data object list, myQuery: object (state of query form))
 * Returns: list of relevant data
*/
export function query(dataList, myQuery) {
  return dataList.filter(data => lambdaQuery(data, myQuery));
}

export function getPublications(dataList) {
  const publications = {};
  for (const data of dataList) {
    const { url } = data;
    for (const pub of data.relevantPublications) {
      publications[pub] = url;
    }
  }
  return publications;
}

export function queryPublications(pubs, myQuery) {
  console.log(myQuery);
  const obj = {};
  for (const entry of Object.entries(pubs)) {
    const pubName = entry[0];
    if (pubName.toLowerCase().includes(myQuery.toLowerCase())) {
      obj[pubName] = entry[1];
    }
  }
  return obj;
}
