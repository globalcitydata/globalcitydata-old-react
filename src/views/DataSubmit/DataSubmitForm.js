import React, { Component } from 'react';

// styles
import './DataSubmitForm.css';

// utils
import { scroll } from '../../utils/scroll';
import { dataState } from '../../utils/data';
import { addData } from '../../utils/api';
import { tags } from '../../utils/tags';

// Form Fields
import { Title } from './FormFields/Title';
import { DataType } from './FormFields/DataType';
import { Authors } from './FormFields/Authors';
import { Summary } from './FormFields/Summary';
import { Description } from './FormFields/Description';
import { TechnicalDetails } from './FormFields/TechnicalDetails';
import { AssociatedPublications } from './FormFields/AssociatedPublications';
import { Tag } from './FormFields/Tag';
import { StringArray } from './FormFields/StringArray';

// Components
import { SubmitButton } from './Components/SubmitButton';
import { AddButton } from './Components/AddButton';
import { ValidationFn } from './Components/ValidationFn';

const preProcessSubmit = oldValue => {
  // split publications into array
  const value = oldValue;
  // add url
  value.url = value.title.split(' ').join('-');
  return value;
};

class DataSubmitForm extends Component {
  state = dataState;

  /*
   * General binding function to bind typed input with input field in state
   * Used by most form fields like title, description, etc...
   */
  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => {
      const newState = prevState;
      newState[name] = value;
      return newState;
    });
  };

  /*
   * Binding function for mapping checkbox fields with state
   * Only used by tags like determinants, world regions, etc...
   */
  handleRadioChange = e => {
    const { name: group, value } = e.target;
    this.setState(oldState => {
      const i = oldState[group].indexOf(value);
      if (i !== -1) oldState[group].splice(i, 1);
      else oldState[group].push(value);
      return oldState;
    });
  };

  /*
   * Binding function for dynamic string array fields
   * Used by fields like Key Highlights, Related Data, etc...
   */
  handleStringArrayChange = e => {
    const { name, placeholder, value } = e.target;
    const i = placeholder.charAt(0) - 1;
    this.setState(prevState => {
      const newState = prevState;
      newState[name][i] = value;
      return newState;
    });
  };

  handleAuthorsChange = e => {
    e.preventDefault();
    const { name, placeholder, value } = e.target;
    const i = placeholder.charAt(0) - 1;
    const tag = 'authors';
    this.setState(prevState => {
      const newState = prevState;
      newState[tag][i][name] = value;
      return newState;
    });
  };

  handlePublicationsChange = e => {
    e.preventDefault();
    const { name, placeholder, value } = e.target;
    const i = placeholder.charAt(0) - 1;
    const tag = 'associatedPublications';
    this.setState(prevState => {
      const newState = prevState;
      newState[tag][i][name] = value;
      return newState;
    });
  };

  /*
   * Function to append new author object to authors list in state
   */
  addAuthor = e => {
    e.preventDefault();
    this.setState(prevState => ({
      authors: [...prevState.authors, { name: '', email: '' }],
    }));
  };

  addPublication = e => {
    e.preventDefault();
    this.setState(prevState => ({
      associatedPublications: [
        ...prevState.associatedPublications,
        { publication: '', url: '' },
      ],
    }));
  };

  /*
   * Function to append new publication object to associatedPublications list in state
   */
  addPublication = e => {
    e.preventDefault();
    this.setState(prevState => ({
      associatedPublications: [
        ...prevState.associatedPublications,
        { publication: '', url: '' },
      ],
    }));
  };

  /*
   * General add function for string array field
   * Simply appends new input line to array specified by tag name
   */
  addToStringArray = e => {
    e.preventDefault();
    const { value: name } = e.target;
    console.log(e.target);
    this.setState(prevState => {
      const newState = prevState;
      console.log(newState);
      newState[name] = [...newState[name], ''];
      return newState;
    });
  };

  /*
   * General delete function for string array field
   * Deletes input line in string array based on tag and index
   */
  deleteFromArray = e => {
    e.preventDefault();
    // get name of tag and index of deleted input in array
    const { value: name, id: i } = e.target;
    this.setState(prevState => {
      const newState = prevState;
      // only delete input if more than one input in array
      if (newState[name].length > 1) {
        newState[name].splice(i, 1);
      } else {
        // can't delete if only one input
        window.Materialize.toast(
          'At least one input is required for this field.',
          2000
        );
      }
      return newState;
    });
  };

  /*
   * Function called by submit button
   * Process state data and send to firebase database
   */
  handleSubmit = async e => {
    e.preventDefault();
    try {
      const value = preProcessSubmit(this.state);
      await addData(value);
      this.setState(dataState);
      window.Materialize.toast('Success! Your data is pending review.', 4000);
    } catch (err) {
      window.Materialize.toast(
        'Uh oh. Something went wrong with your submission.',
        4000
      );
    }
    // scroll to top after submit
    const anchor = document.querySelector('#dataSubmit');
    scroll.animateScroll(anchor);
  };

  render() {
    const {
      title,
      dataType,
      authors,
      summary,
      keyHighlights,
      citations,
      description,
      technicalDetails,
      relatedData,
      associatedPublications,
    } = this.state;

    const isValid = ValidationFn(this.state);

    return (
      <section className="dataSubmit" id="dataSubmit">
        <div className="container">
          <h1 style={{ fontSize: '4rem' }}>Submit Data</h1>
          <form>
            <div>
              <h4>Title</h4>
              <Title val={title} f={this.handleChange} />
              <DataType val={dataType} f={this.handleChange} />
            </div>
            <div>
              <h4>Corresponding Author(s)</h4>
              <Authors
                val={authors}
                f={this.handleAuthorsChange}
                del_f={this.deleteFromArray}
              />
              <AddButton f={this.addAuthor} name="authors" />
            </div>
            <div>
              <h4>Summary Overview</h4>
              <Summary val={summary} f={this.handleChange} />
            </div>
            <div>
              <h4>Key Highlights</h4>
              <p>
                Key elements/highlights of the dataset/model, max 200 characters
                each.
              </p>
              <StringArray
                val={keyHighlights}
                name="keyHighlights"
                f={this.handleStringArrayChange}
                del_f={this.deleteFromArray}
              />
              <AddButton f={this.addToStringArray} name="keyHighlights" />
            </div>
            <div>
              <h4>Citations</h4>
              <StringArray
                val={citations}
                name="citations"
                f={this.handleStringArrayChange}
                del_f={this.deleteFromArray}
              />
              <AddButton f={this.addToStringArray} name="citations" />
            </div>
            <div>
              <h4>Detailed Description</h4>
              <Description val={description} f={this.handleChange} />
            </div>
            <div>
              <h4>Technical Details</h4>
              <TechnicalDetails val={technicalDetails} f={this.handleChange} />
            </div>
            <div>
              <h4>Related datasets, models, or tutorials</h4>
              <p>Internal or external links.</p>
              <StringArray
                val={relatedData}
                name="relatedData"
                f={this.handleStringArrayChange}
                del_f={this.deleteFromArray}
              />
              <AddButton f={this.addToStringArray} name="relatedData" />
            </div>
            <div>
              <h4>Associated Publications</h4>
              <strong>
                Please enter your citations in the same format as the following
                example:
              </strong>
              <br />
              <br />
              <i>
                Boyer, D., & Ramaswami, A. (2017). What Is the Contribution of
                City-Scale Actions to the Overall Food System’s Environmental
                Impacts?: Assessing Water, Greenhouse Gas, and Land Impacts of
                Future Urban Food Scenarios. Environmental Science and
                Technology, 51(20).
              </i>
              <div style={{ marginTop: '2rem' }}>
                <AssociatedPublications
                  val={associatedPublications}
                  f={this.handlePublicationsChange}
                  del_f={this.deleteFromArray}
                />
              </div>
              <AddButton
                f={this.addPublication}
                name="associatedPublications"
              />
            </div>
            {/* Tags */}
            {tags.map(({ label, options, descriptions: descr }) => (
              <Tag
                label={label}
                options={options}
                descriptions={descr}
                f={this.handleRadioChange}
                key={label}
              />
            ))}

            <SubmitButton isEnabled={isValid} f={this.handleSubmit} />
          </form>
        </div>
      </section>
    );
  }
}

export default DataSubmitForm;
