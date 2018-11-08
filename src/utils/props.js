import { shape, bool, array, string } from 'prop-types';

const dataType = shape({
  applicableData: string.isRequired,
  contact: string.isRequired,
  dataType: shape({
    dataset: bool.isRequired,
    model: bool.isRequired,
    tutorial: bool.isRequired,
  }),
  context: string.isRequired,
  description: string.isRequired,
  keyTakeaways: string.isRequired,
  outcomes: shape({
    environmentalImpacts: bool.isRequired,
    equity: bool.isRequired,
    health: bool.isRequired,
    livability: bool.isRequired,
    wellBeing: bool.isRequired,
  }),
  owner: string.isRequired,
  parameters: shape({
    social: bool.isRequired,
    environment: bool.isRequired,
    infrastructure: bool.isRequired,
    urbanDesign: bool.isRequired,
  }),
  published: bool.isRequired,
  relevantPublications: array.isRequired,
  spatialScales: shape({
    intraUrban: bool.isRequired,
    wholeCity: bool.isRequired,
    nationalUrban: bool.isRequired,
  }),
  technicalDetails: string.isRequired,
  temporalScales: shape({
    singleYearSnapshot: bool.isRequired,
    timeSeries: bool.isRequired,
    futuresModeling: bool.isRequired,
  }),
  sectors: shape({
    buildings: bool.isRequired,
    energy: bool.isRequired,
    transportation: bool.isRequired,
    informationCommunication: bool.isRequired,
    waterSupply: bool.isRequired,
    sanitationWaste: bool.isRequired,
    foodSupply: bool.isRequired,
    landPublicSpace: bool.isRequired,
  }),
  title: string.isRequired,
  usesAndVisualizations: string.isRequired,
  worldRegions: shape({
    northAmerica: bool.isRequired,
    southAmerica: bool.isRequired,
    europe: bool.isRequired,
    africa: bool.isRequired,
    asia: bool.isRequired,
  }),
});

export default dataType;
