import React, { Fragment } from 'react';
import { Input, Row } from 'react-materialize';
import { string, func, arrayOf, number } from 'prop-types';
import { startCase } from 'lodash';
import { DeleteButton } from '../Components/DeleteButton';

/*
 * @param label: placeholder that goes inside input field
 * @param val: value typed by user inside input field
 * @param name: name of associated tag
 * @param f: binding function between input val and state
 * @param del_f: delete function for each line
 * @param i: index of specific input field in array
 */
const StringInput = ({ label, val, name, f, del_f, i }) => (
  <Row>
    <Input s={10} name={name} placeholder={label} value={val} onChange={f} />
    <DeleteButton s={2} name={name} f={del_f} i={i} />
  </Row>
);

/*
 * @param arr: array passed from state
 * @param f: binding function between input val and state
 * @param name: name of associated tag
 * @param del_f: delete function for each line
 */
export const StringArray = ({ val: arr, f, name, del_f }) => (
  <Fragment>
    {arr.map((s, i) => {
      const label = `${i + 1}) ${startCase(name)}`;
      return (
        <StringInput
          label={label}
          val={s}
          name={name}
          f={f}
          key={label}
          del_f={del_f}
          i={i}
        />
      );
    })}
  </Fragment>
);

StringInput.defaultProps = {
  val: '',
};

StringInput.propTypes = {
  label: string.isRequired,
  val: string,
  name: string.isRequired,
  f: func.isRequired,
  del_f: func.isRequired,
  i: number.isRequired,
};

StringArray.propTypes = {
  val: arrayOf(string).isRequired,
  name: string.isRequired,
  f: func.isRequired,
  del_f: func.isRequired,
};
