import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import { selectIntro } from '../actions/actions.js';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.changeToIntro = this.changeToIntro.bind(this)
  }

  changeToIntro() {
    this.props.onSelectIntro()
  }

  getDate() {
    const today = new Date()
    const dd = today.getDate()
    const mm = today.getMonth() + 1
    const yyyy = today.getFullYear()

    return `${mm}/${dd}/${yyyy}`
  }

// Main render method
  render() {
    const result = this.props.result
    return (
      <div className="admin">
        <h2 className="header-intro">User results from {this.getDate()}</h2>
        <div className="admin-button-container">
          <Button bsSize="large" className="adminButton" onClick={this.changeToIntro}>Back to Intro</Button>
        </div>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Download table"/>
        <table id="table-to-xls">
          <tbody>
          <tr>
            <th>User ID</th>
            <th>User name</th>
            <th>Level</th>
            <th>Time for round 1</th>
            <th>Time for round 2</th>
            <th>Time for round 3</th>
            <th>Selected letters round 1</th>
            <th>Selected letters round 2</th>
            <th>Selected letters round 3</th>
            <th>Letter for round 1</th>
            <th>Letter for round 2</th>
            <th>Letter for round 3</th>
          </tr>
            {Object.keys(result)
              .map(k =>
                <tr key={result[k].id}>
                  <td>{result[k].id}</td>
                  <td>{result[k].name}</td>
                  <td>{result[k].level}</td>
                  <td>{result[k].timeForRound1}</td>
                  <td>{result[k].timeForRound2}</td>
                  <td>{result[k].timeForRound3}</td>
                  <td>{result[k].selectedLettersRound1}</td>
                  <td>{result[k].selectedLettersRound2}</td>
                  <td>{result[k].selectedLettersRound3}</td>
                  <td>{result[k].letterForRound1}</td>
                  <td>{result[k].letterForRound2}</td>
                  <td>{result[k].letterForRound3}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

Admin.propTypes = {
}

const mapStateToProps = (state, _ownProps) => {
  return {
    result: state.result,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onSelectIntro: () => {
    dispatch(selectIntro())
  }
});

Admin = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);

export default Admin;
