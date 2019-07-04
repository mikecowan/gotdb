import React, { Component } from 'react';
//import './CardRow.css';
import './CardTable.css';
import Icons from './Icons';
import PlotAttributes from './PlotAttributes';

class CardRow extends Component {
  imgRoll = (ev) => {
    const id = this.props.card.CardId;
    this.props.imgRoll(ev, id);
  }

  render() {
    const card = this.props.card;
    const displayName = card.Alias !== null ? card.Alias : card.CardName;

    let rowClass = 'cardRow';
    if (card.Loyal) {
      rowClass += ' loyal-' + card.FactionId;
    }

    let factionKneelClass = '';
    if (card.Interactions.some(x => x.ObjectId === 14)) {
      factionKneelClass = 'factionKneel';
    }

    const iconList = [
      { 'iconId': 1, 'val': 'Military', 'hasIcon': card.Military },
      { 'iconId': 2, 'val': 'Intrigue', 'hasIcon': card.Intrigue },
      { 'iconId': 3, 'val': 'Power', 'hasIcon': card.Power }
    ];

    const plotStatList = [
      { 'statId': 0, 'val': card.Income },
      { 'statId': 1, 'val': card.Initiative },
      { 'statId': 2, 'val': card.Claim },
      { 'statId': 3, 'val': card.Reserve }
    ];

    let iconDiv = null;
    let plotDiv = null;
    if (card.TypeId === 1) {
      iconDiv = <Icons iconList={iconList} />;
    }
    if (card.TypeId === 5) {
      plotDiv = <PlotAttributes statList={plotStatList} />;
    }

    const cost = card.Cost !== null ? card.Cost : 0;

    return (
      <div className={rowClass}>
        <div className='col-sm'><img src={require('../../Images/houseicon-' + card.FactionId + '.png')} className='mix icon-sm' alt={card.FactionName} /></div>
        <div className='col-sm'><img src={require('../../Images/' + (card.Uniq ? 'unique-icon' : 'icon-0') + '.png')} className='mix icon-sm' alt={card.Uniq.toString()} /></div>
        <div className={'col-lg text-md ' + factionKneelClass} onMouseOver={this.imgRoll} onClick={this.imgRoll}>{displayName}</div>
        <div className='col-md text-sm'>{card.TypeName}</div>
        <div className='col-sm'><img src={require('../../Images/' + (card.TypeId > 4 ? 'icon-0.png' : 'g-' + cost + '.png'))} className={card.TypeId > 4 ? 'mix icon' : 'icon-sm'} alt={cost} /></div>
        <div className='col-sm'><img src={require('../../Images/' + (card.TypeId === 1 ? 's-' + card.Strength + '.png' : 'icon-0.png'))} className={card.TypeId > 1 ? 'mix icon-sm' : 'icon-sm'}  alt='STR' /></div>
        <div className='col-md'>{iconDiv}</div>
        <div className='col-md'>{plotDiv}</div>
      </div>
    )
  }
}

export default CardRow;
