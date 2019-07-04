import React, { Component } from 'react';
import './Panel.css';
import CardTable from '../CardTable/CardTable';

class CenterPanel extends Component {
  toggleLeft = () => {
    this.props.toggleLeft();
  }

  toggleRight = () => {
    this.props.toggleRight();
  }

  imgRoll = (ev, CardId) => {
    this.props.imgRoll(ev, CardId);
  }

  render() {
    let headers = [
      { 'index': 0, 'label': '',            'size': 'sm', 'sortImg': require('../../Images/arrow-blank.png') },
      { 'index': 1, 'label': '',            'size': 'sm', 'sortImg': require('../../Images/arrow-blank.png') },
      { 'index': 2, 'label': 'Name',        'size': 'lg', 'sortImg': require('../../Images/arrow-blank.png') },
      { 'index': 3, 'label': 'Type',        'size': 'md', 'sortImg': require('../../Images/arrow-blank.png') },
      { 'index': 4, 'label': 'Cost',        'size': 'sm', 'sortImg': require('../../Images/arrow-blank.png') },
      { 'index': 5, 'label': 'Str',         'size': 'sm', 'sortImg': require('../../Images/arrow-blank.png') },
      { 'index': 6, 'label': 'Icons',       'size': 'md', 'sortImg': require('../../Images/arrow-blank.png') },
      { 'index': 7, 'label': 'Plot Stats',  'size': 'md', 'sortImg': require('../../Images/arrow-blank.png') },
    ];

    headers[0].sortImg = require('../../Images/arrow-down.png');
    headers[1].sortImg = require('../../Images/arrow-up.png');

    //if (this.props.headers !== null && this.props.headers.index !== null) {
    //  headers[this.props.headers.index].sortImg = require('../../Images/arrow-up.png');
    //}

    return (
      <div className={' inlineblock aligntop centerPanel relativePosition'}>
        <div>
          <div className='floatLeft'><button onClick={this.toggleLeft}>hide/show</button></div>
          <div className='floatRight'><button onClick={this.toggleRight}>hide/show</button></div>
        </div>
        <div className='clearBoth'>Count: {this.props.cardList.length}</div>
        <div>
          <CardTable cardList={this.props.cardList} imgRoll={this.imgRoll} header={headers} />
        </div>
      </div>
    )
  }
}

export default CenterPanel;
