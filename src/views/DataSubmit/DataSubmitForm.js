import React, { Component } from 'react';

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
import { DynamicStringArray } from './FormFields/DynamicStringArray';

// Components
import { SubmitButton } from './Components/SubmitButton';
import { AddButton } from './Components/AddButton';

function preProcessSubmit(oldValue) {
  // split publications into array
  const value = oldValue;
  let pubs = value.relevantPublications.split(';');
  pubs = pubs.filter(pub => pub !== '' && pub !== ' ');
  value.relevantPublications = pubs.map(pub => pub.trim());
  // add url
  value.url = value.title.split(' ').join('-');
  return value;
}

class DataSubmitForm extends Component {
  state = dataState;

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => {
      const newState = prevState;
      newState[name] = value;
      return newState;
    });
  };

  handleRadioChange = e => {
    const { name: group, value } = e.target;
    this.setState(oldState => {
      const i = oldState[group].indexOf(value);
      if (i !== -1) oldState[group].splice(i, 1);
      else oldState[group].push(value);
      return oldState;
    });
  };

  handleStringArrayChange = e => {
    const { name, placeholder, value } = e.target;
    const i = placeholder.charAt(0) - 1;
    this.setState(prevState => {
      const newState = prevState;
      newState[name][i] = value;
      return newState;
    });
  };

  addAuthor = e => {
    e.preventDefault();
    this.setState(prevState => ({
      authors: [...prevState.authors, { name: '', email: '' }],
    }));
  };

  addToStringArray = e => {
    e.preventDefault();
    const { value: name } = e.target;
    this.setState(prevState => {
      const newState = prevState;
      newState[name] = [...newState[name], ''];
      return newState;
    });
  };

  addHighlight = e => {
    e.preventDefault();
    this.setState(prevState => ({
      keyHighlights: [...prevState.keyHighlights, ''],
    }));
  };

  async handleSubmit(e) {
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
  }

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

    // const isEnabled =
    //   title.length > 0 &&
    //   description.length > 0 &&
    //   context.length > 0 &&
    //   keyTakeaways.length > 0 &&
    //   usesAndVisualizations.length > 0 &&
    //   technicalDetails.length > 0 &&
    //   applicableData.length > 0 &&
    //   relevantPublications.length > 0 &&
    //   owner.length > 0 &&
    //   contact.length > 0;

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
              <Authors val={authors} f={this.handleChange} />
              <AddButton add={this.addAuthor} />
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
              <DynamicStringArray
                val={keyHighlights}
                name="keyHighlights"
                f={this.handleStringArrayChange}
              />
              <AddButton f={this.addToStringArray} name="keyHighlights" />
            </div>
            <div>
              <h4>Citations</h4>
              <DynamicStringArray
                val={citations}
                name="citations"
                f={this.handleStringArrayChange}
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
              <DynamicStringArray
                val={relatedData}
                name="relatedData"
                f={this.handleStringArrayChange}
              />
              <AddButton f={this.addToStringArray} name="relatedData" />
            </div>
            <div>
              <h4>Associated Publications</h4>
              <strong>
                Please enter your citations in the same format as the following
                example:
              </strong>
              <cite>
                Boyer, D., & Ramaswami, A. (2017). What Is the Contribution of
                City-Scale Actions to the Overall Food System’s Environmental
                Impacts?: Assessing Water, Greenhouse Gas, and Land Impacts of
                Future Urban Food Scenarios. Environmental Science and
                Technology, 51(20).
              </cite>
              <AssociatedPublications
                val={associatedPublications}
                f={this.handleChange}
              />
            </div>
            {/* Tags */}
            {tags.map(({ label, options }) => (
              <Tag label={label} options={options} f={this.handleRadioChange} />
            ))}

            <SubmitButton isEnabled f={this.handleSubmit} />
          </form>
        </div>
      </section>
    );
  }
}

export default DataSubmitForm;
