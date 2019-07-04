import React, { Component } from 'react';
import CardRow from './CardRow';
//import './CardRow.css';
import './CardTable.css';

class CardTable extends Component {
  imgRoll = (ev, CardId) => {
    this.props.imgRoll(ev, CardId);
  }

  render() {
    const headerRow = this.props.header.map(x =>
      <div key={x.index} className={'col-' + x.size}><img src={x.sortImg} className='arrow' />{x.label}</div>
    );

    const rows = this.props.cardList.map(x =>
      <CardRow key={x.CardId} card={x} imgRoll={this.imgRoll} />
    );

    return (
      <div className='cardTable'>
        <div className='cardRow headerRow'>
          {headerRow}
        </div>
        {rows}
      </div>
    )
  }
}

export default CardTable;
