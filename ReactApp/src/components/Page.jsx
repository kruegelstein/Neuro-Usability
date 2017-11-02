import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import {  } from '../actions/actions.js';

class Page extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activeUser: this.props.activeUser,
  //   }
  //   this.onSubmitForm = this.onSubmitForm.bind(this)
  // }

  handleClick(color) {
    console.log('######', color)
  }

// Main render method
  render() {
    const colors = [
      {
        name: 'Blue',
        text: 'Hey'
      },
      {
        name: 'Green',
        text: 'Hello'
      },
      {
        name: 'Red',
        text: 'Hi'
      },
      {
        name: 'Yellow',
        text: 'Greetz'
      },
    ];
    return (
      <div className="page">
        <h2 className="header">Please click any button</h2>
        {colors.map(color => {
          return (
            <div className={`btn${color.name}`}>
              <a onClick={this.handleClick(color.name)}>
                <p>
                  {color.text}
                </p>
              </a>
            </div>
          )
        }
      )}
      </div>
    )
  }
}

Page.propTypes = {

}

const mapStateToProps = (state, _ownProps) => {
  const user = state.user.id
  return {
    user,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  // onSubmitNewUser: (id, name) => {
  //   dispatch(addUserToDb(id, name))
  // },
  // onChangeFormValue: (field, value) => {
  //   dispatch(changeFormValue(field, value))
  // }
});

Page = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default Page;
