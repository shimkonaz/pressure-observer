import React, { Component } from 'react';

import RecordsListItem from './records-list-item/records-list-item.component';

export default class RecordsList extends Component {
  constructor(props){
    super(props);

    this.listItems = props.records && props.records.length
      ? props.records.map(record => <li><RecordsListItem value={record} /></li>)
      : [];
  }  

  render() {
    return (
      <div className="records-list">
        <h2>
          Records List
        </h2>
        
        <ul>
          {this.listItems}
        </ul>
      </div>
    )
  }
}
