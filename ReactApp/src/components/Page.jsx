import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { FABButton, Icon } from 'react-mdl';

import { colors } from './constants/colors.js';

import { saveSelection } from '../actions/actions.js';

class Page extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const color = e.target.name
    this.props.onChooseColor(color);
  }

// Main render method
  render() {
    return (
      <div className="page">
        <h2 className="header">Please click any button</h2>
        <div className="buttonContainer">
          {colors.map(color => {
            return (
              <button
                key={color.id}
                name={color.name}
                onClick={this.handleClick}
                id={`btn${color.name}`}
                className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
              />
            )
          }
        )}
        </div>
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
  onChooseColor: (color) => {
    dispatch(saveSelection(color))
  },
});

Page = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default Page;
