import React, { Component } from 'react';
import CheckboxGroup from '../CheckboxGroup';

class LeftPanel extends Component {
  constructor(props) {
    super(props);

    this.factionChange = this.factionChange.bind(this);
    this.typeChange = this.typeChange.bind(this);
  }

  factionChange(FactionList) {
    let cardFilter = this.props.cardFilterList;
    cardFilter.Factions = FactionList;

    this.props.loadCards(cardFilter);
  }

  typeChange(TypeList) {
    let cardFilter = this.props.cardFilterList;
    cardFilter.Types = TypeList;
    this.props.loadCards(cardFilter);
  }

  render() {
    const allFactions = { 'suffix': 'all', 'label': 'ALL Houses' };
    const factionLabelList = [
      { 'index': 0, 'label': 'Neutral' },
      { 'index': 1, 'label': 'Stark' },
      { 'index': 2, 'label': 'Lannister' },
      { 'index': 3, 'label': 'Baratheon' },
      { 'index': 4, 'label': 'Greyjoy' },
      { 'index': 5, 'label': 'Tyrell' },
      { 'index': 6, 'label': 'Martell' },
      { 'index': 7, 'label': 'Targaryen' },
      { 'index': 8, 'label': "Night's Watch" }
    ]

    const allTypes = { 'suffix': 'all', 'label': 'ALL Types' };
    const typeLabelList = [
      { 'index': 1, 'label': 'Characters' },
      { 'index': 2, 'label': 'Events' },
      { 'index': 3, 'label': 'Attachments' },
      { 'index': 4, 'label': 'Locations' },
      { 'index': 5, 'label': 'Plots' },
      { 'index': 6, 'label': 'Agendas' }
    ]

    return (
      <div className='inlineblock aligntop'>
        <div>
          <CheckboxGroup prefix='cb-house' all={allFactions} labels={factionLabelList}
                         handleChange={this.factionChange}
                         checkedItemIndices={this.props.cardFilterList.Factions} />
        </div>

        <div>
          <CheckboxGroup prefix='cb-type' all={allTypes} labels={typeLabelList}
                         handleChange={this.typeChange}
                         checkedItemIndices={this.props.cardFilterList.Types} />
        </div>

      </div>
    )
  }
}

export default LeftPanel;
