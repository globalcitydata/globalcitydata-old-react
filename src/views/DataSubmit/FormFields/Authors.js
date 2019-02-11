import React, { Fragment } from 'react';
import { Input, Row, Col } from 'react-materialize';
import { string, func, shape, arrayOf } from 'prop-types';
import { DeleteButton } from '../Components/DeleteButton';

// TODO: Figure out how to dynamically add author fields

const AuthorGroup = ({ name, email, f, i }) => (
  <Fragment>
    <Input
      s={12}
      name="name"
      placeholder={`${i + 1}) Name`}
      value={name}
      onChange={f}
    />
    <Input
      s={12}
      name="email"
      placeholder={`${i + 1}) Email`}
      type="email"
      value={email}
      onChange={f}
    />
  </Fragment>
);

/*
 * @param authors: array passed from state
 * @param f: binding function between input val and state
 * @param del_f: delete function for each author group
 */
export const Authors = ({ val: authors, f, del_f }) => (
  <Fragment>
    {authors.map(({ name, email }, i) => {
      const title = `Author ${i + 1}`;
      return (
        <Fragment key={title}>
          <Row>
            <Col>
              <h6>{title}</h6>
            </Col>
            <DeleteButton name="authors" f={del_f} i={i} />
          </Row>
          <div style={{ padding: '0 2rem' }}>
            <AuthorGroup name={name} email={email} f={f} i={i} />
          </div>
        </Fragment>
      );
    })}
  </Fragment>
);

AuthorGroup.propTypes = {
  name: string.isRequired,
  email: string.isRequired,
  f: func.isRequired,
};

Authors.propTypes = {
  val: arrayOf(
    shape({
      name: string.isRequired,
      email: string.isRequired,
    })
  ).isRequired,
  f: func.isRequired,
};
