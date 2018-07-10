import React from 'react';

function displayTags(tags) {
  const entries = Object.entries(tags);
  const entriesToDisplay = entries.filter(tagEntry => tagEntry[1]);
  const tagsToDisplay = entriesToDisplay.map(entry => entry[0]);
  return <div>{tagsToDisplay.map(tag => <p>{tag}</p>)}</div>;
}

function DataDetail({ data }) {
  const {
    applicableData,
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
    <div>
      <h2>
        {title} - {contentType}
      </h2>
      <div>
        <p>{description}</p>
      </div>
      <h4>Tags</h4>
      <div>
        <p>
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
        </p>
      </div>
      <h4>Context</h4>
      <div>
        <p>{context}</p>
      </div>
      <h4>Key Takeaways</h4>
      <div>
        <p>{keyTakeaways}</p>
      </div>
      <h4>Sample Uses and Visualizations</h4>
      <div>
        <p>{usesAndVisualizations}</p>
      </div>
      <h4>Technical Details</h4>
      <div>
        <p>{technicalDetails}</p>
      </div>
      <h4>Applicable Datasets, Models, and Tutorials</h4>
      <div>
        <p>{applicableData}</p>
      </div>
      <h4>Relevant Publications</h4>
      <div>
        <p>{relevantPublications.map(pub => <p>{pub}</p>)}</p>
      </div>
    </div>
  );
}

export default DataDetail;
