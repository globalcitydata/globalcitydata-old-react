import React from 'react';
import { Preloader } from 'react-materialize';

const findData = (dataList, dataURL) => {
  if (!dataList || dataList.length === 0) {
    return null;
  }
  const data = dataList.shift();
  return data.url === dataURL ? data : findData(dataList, dataURL);
};

function displayTags(tags) {
  const entries = Object.entries(tags);
  const entriesToDisplay = entries.filter(tagEntry => tagEntry[1]);
  const tagsToDisplay = entriesToDisplay.map(entry => entry[0]);
  return <div>{tagsToDisplay.map(tag => <p>{tag}</p>)}</div>;
}

const DataDetail = ({ match, dataList }) => {
  const { dataURL } = match.params;
  const data = findData(dataList, dataURL);
  return (
    <div className="container">
      {!data ? (
        <div className="center"><Preloader flashing /></div>
      ) : (
          <DataDetailBody data={data} />
        )}
    </div>
  );
};

const DataDetailBody = ({ data }) => {
  const {
    applicableData,
    contact,
    contentType,
    context,
    description,
    keyTakeaways,
    outcomes,
    parameters,
    relevantPublications,
    spatialScales,
    temporalScales,
    technicalDetails,
    title,
    usesAndVisualizations,
    worldRegions
  } = data;
  return (
    <div className="dataDetailContainer">
      <div className="container">
        <h2>{title}</h2>
        <hr />
        <div className="dataDetailContent">
          <h6>Description</h6>
          <div>
            <p>{description}</p>
          </div>
          {/* <h6>Tags</h6> */}
          <div>
            {/* <p>
          <strong>Parameters:</strong> {displayTags({ parameters })}
        </p>
        <p>
          <strong>Outcomes:</strong> {displayTags({ outcomes })}
        </p>
        <p>
          <strong>Spatial Scales:</strong> {displayTags({ spatialScales })}
        </p>
        <p>
          <strong>Temporal Scales:</strong> {displayTags({ temporalScales })}
        </p>
        <p>
          <strong>World Regions:</strong> {displayTags({ worldRegions })}
        </p> */}
          </div>
          <h6>Context</h6>
          <div>
            <p>{context}</p>
          </div>
          <h6>Key Takeaways</h6>
          <div>
            <p>{keyTakeaways}</p>
          </div>
          <h6>Sample Uses and Visualizations</h6>
          <div>
            <p>{usesAndVisualizations}</p>
          </div>
          <h6>Technical Details</h6>
          <div>
            <p>{technicalDetails}</p>
          </div>
          <h6>Applicable Datasets, Models, and Tutorials</h6>
          <div>
            <p>{applicableData}</p>
          </div>
          {/* <h6>Relevant Publications</h6> */}
          {/* <div>
        <p>{relevantPublications.map(pub => <p>{pub}</p>)}</p>
      </div> */}
          <h6>Request Access</h6>
          <p>{contact}</p>
        </div>
      </div>
    </div>
  );
};

// function DataDetail({ data }) {
//   const {
//     applicableData,
//     contentType,
//     context,
//     description,
//     keyTakeaways,
//     outcomes,
//     parameters,
//     relevantPublications,
//     spatialScales,
//     temporalScales,
//     technicalDetails,
//     title,
//     usesAndVisualizations,
//     worldRegions
//   } = data;
//   return (
//     <div>
//       <h2>
//         {title} - {contentType}
//       </h2>
//       <div>
//         <p>{description}</p>
//       </div>
//       <h4>Tags</h4>
//       <div>
//         <p>
//           <strong>Parameters:</strong> {displayTags({ parameters })}
//         </p>
//         <p>
//           <strong>Outcomes:</strong> {displayTags({ outcomes })}
//         </p>
//         <p>
//           <strong>Spatial Scales:</strong> {displayTags({ spatialScales })}
//         </p>
//         <p>
//           <strong>Temporal Scales:</strong> {displayTags({ temporalScales })}
//         </p>
//         <p>
//           <strong>World Regions:</strong> {displayTags({ worldRegions })}
//         </p>
//       </div>
//       <h4>Context</h4>
//       <div>
//         <p>{context}</p>
//       </div>
//       <h4>Key Takeaways</h4>
//       <div>
//         <p>{keyTakeaways}</p>
//       </div>
//       <h4>Sample Uses and Visualizations</h4>
//       <div>
//         <p>{usesAndVisualizations}</p>
//       </div>
//       <h4>Technical Details</h4>
//       <div>
//         <p>{technicalDetails}</p>
//       </div>
//       <h4>Applicable Datasets, Models, and Tutorials</h4>
//       <div>
//         <p>{applicableData}</p>
//       </div>
//       <h4>Relevant Publications</h4>
//       <div>
//         <p>{relevantPublications.map(pub => <p>{pub}</p>)}</p>
//       </div>
//     </div>
//   );
// }

export default DataDetail;
