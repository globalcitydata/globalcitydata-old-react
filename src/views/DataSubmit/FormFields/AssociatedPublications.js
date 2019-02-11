import React, { Fragment } from 'react';
import { Input, Row, Col } from 'react-materialize';
import { string, func, shape, arrayOf } from 'prop-types';
import { DeleteButton } from '../Components/DeleteButton';

// TODO: Figure out how to dynamically add author fields

const PublicationsGroup = ({ pub, url, f, i }) => (
  <Fragment>
    <Input
      s={12}
      name="publication"
      placeholder={`${i + 1}) Publication`}
      value={pub}
      onChange={f}
    />
    <Input
      s={12}
      name="url"
      placeholder={`${i + 1}) URL`}
      type="url"
      value={url}
      onChange={f}
    />
  </Fragment>
);

/*
 * @param authors: array passed from state
 * @param f: binding function between input val and state
 * @param del_f: delete function for each author group
 */
export const AssociatedPublications = ({ val: pubs, f, del_f }) => (
  <Fragment>
    {pubs.map(({ publication, url }, i) => {
      const title = `Associated Publication ${i + 1}`;
      return (
        <Fragment key={title}>
          <Row>
            <Col>
              <h6>{title}</h6>
            </Col>
            <DeleteButton name="associatedPublications" f={del_f} i={i} />
          </Row>
          <div style={{ padding: '0 2rem' }}>
            <PublicationsGroup pub={publication} url={url} f={f} i={i} />
          </div>
        </Fragment>
      );
    })}
  </Fragment>
);

PublicationsGroup.propTypes = {
  pub: string.isRequired,
  url: string.isRequired,
  f: func.isRequired,
};

AssociatedPublications.propTypes = {
  val: arrayOf(
    shape({
      publication: string.isRequired,
      url: string.isRequired,
    })
  ).isRequired,
  f: func.isRequired,
};

// import React, { Fragment } from 'react';
// import { Input } from 'react-materialize';
// import { string, func, shape, arrayOf } from 'prop-types';

// // TODO: Figure out how to dynamically add author fields

// const PublicationsGroup = ({ publication, url, f }) => (
//   <Fragment>
//     <Input
//       s={12}
//       name="publication"
//       label="Associated Publication"
//       value={publication}
//       onChange={f}
//     />
//     <Input s={12} name="url" label="Relevant URL" value={url} onChange={f} />
//   </Fragment>
// );

// export const AssociatedPublications = ({ val: publications, f }) => (
//   <Fragment>
//     {publications.map(({ publication, url }) => (
//       <PublicationsGroup
//         publication={publication}
//         url={url}
//         f={f}
//         key={publication}
//       />
//     ))}
//   </Fragment>
// );

// PublicationsGroup.propTypes = {
//   publication: string.isRequired,
//   url: string.isRequired,
//   f: func.isRequired,
// };

// AssociatedPublications.propTypes = {
//   val: arrayOf(
//     shape({
//       publication: string.isRequired,
//       url: string.isRequired,
//     })
//   ).isRequired,
//   f: func.isRequired,
// };
