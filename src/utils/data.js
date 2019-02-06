import { shape, bool, arrayOf, string } from 'prop-types';

export const dataState = {
  published: false,
  title: '',
  dataType: 'dataset',
  authors: [{ name: '', email: '' }],
  summary: '',
  keyHighlights: [''],
  citations: [''],
  description: '',
  technicalDetails: '',
  relatedData: [''],
  associatedPublications: [{ publication: '', url: '' }],
  spatialScales: [],
  temporalScales: [],
  sectors: [],
  sustainabilityOutcomes: [],
  determinants: [],
  worldRegions: [],
};

export const dataType = shape({
  published: bool.isRequired,
  title: string.isRequired,
  dataType: string.isRequired,
  authors: arrayOf(
    shape({
      name: string,
      email: string,
    })
  ).isRequired,
  summary: string.isRequired,
  keyHighlights: arrayOf(string).isRequired,
  citations: arrayOf(string).isRequired,
  description: string.isRequired,
  technicalDetails: string.isRequired,
  relatedData: arrayOf(string).isRequired,
  associatedPublications: arrayOf(
    shape({
      publication: string,
      url: string,
    })
  ).isRequired,
  spatialScales: arrayOf(string).isRequired,
  temporalScales: arrayOf(string).isRequired,
  sectors: arrayOf(string).isRequired,
  sustainabilityOutcomes: arrayOf(string).isRequired,
  determinants: arrayOf(string.isRequired),
  worldRegions: arrayOf(string).isRequired,
});
