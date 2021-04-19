import React, { Component } from 'react';

export default class RecordsListItem extends Component {
  render() {
    const { systolic, diastolic, pulse, description } = this.props.value;

    return (
      <div>
        <span className="systolic">{systolic}</span>
        <span className="diastolic">{diastolic}</span>
        <span className="pulse">{pulse}</span>
        <span className="description">{description}</span>
      </div>
    )
  }
}
