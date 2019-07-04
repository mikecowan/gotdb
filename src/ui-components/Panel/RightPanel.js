import React, {Component} from 'react';
import SelectGroup from '../SelectGroup';
import Checkbox from '../Checkbox';
import ImageCheckbox from '../ImageCheckbox/ImageCheckbox';
import DoubleSlider from '../Slider/DoubleSlider';

class RightPanel extends Component {
    constructor(props) {
        super(props);

        this.handleLoyalClick = this.handleLoyalClick.bind(this);
        this.handleNonLoyalClick = this.handleNonLoyalClick.bind(this);
        this.handleUniqueClick = this.handleUniqueClick.bind(this);
        this.handleNonUniqueClick = this.handleNonUniqueClick.bind(this);
        this.handleIconClick = this.handleIconClick.bind(this);
        this.handleCostUpdate = this.handleCostUpdate.bind(this);
        this.handleStrengthUpdate = this.handleStrengthUpdate.bind(this);
    }

    handleLoyalClick(ev) {
      let newFilter = this.props.cardFilterList;
      newFilter.Loyal = ev.target.checked
      this.props.filterCards(newFilter);
    }

    handleNonLoyalClick(ev) {
      let newFilter = this.props.cardFilterList;
      newFilter.Nonloyal = ev.target.checked
      this.props.filterCards(newFilter);
    }

    handleUniqueClick(ev) {
      let newFilter = this.props.cardFilterList;
      newFilter.Unique = ev.target.checked
      this.props.filterCards(newFilter);
    }

    handleNonUniqueClick(ev) {
      let newFilter = this.props.cardFilterList;
      newFilter.Nonunique = ev.target.checked
      this.props.filterCards(newFilter);
    }

    handleIconClick(newCheckStatus, id) {
      let newFilter = this.props.cardFilterList;
      
      if (!newCheckStatus && newFilter.Icons.some(x => x === id)) {
        const itemIndex = newFilter.Icons.indexOf(id);
        newFilter.Icons.splice(itemIndex, 1);
      }
      else if (newCheckStatus && !newFilter.Icons.some(x => x === id)) {
        newFilter.Icons.push(id);
      }

      this.props.filterCards(newFilter);
    }

    handleCostUpdate(min, max) {
      let newFilter = this.props.cardFilterList;
      newFilter.CostRange.min = min;
      newFilter.CostRange.max = max;

      this.props.filterCards(newFilter);
    }

    handleStrengthUpdate(min, max) {
      let newFilter = this.props.cardFilterList;
      newFilter.StrengthRange.min = min;
      newFilter.StrengthRange.max = max;

      this.props.filterCards(newFilter);
    }

    render() {

        const keywords = [
            { 'id': 1,  'label': 'Ambush' },
            { 'id': 11, 'label': 'Bestow' },
            { 'id': 17, 'label': 'Stealth' },
            { 'id': 18, 'label': 'Renown' },
            { 'id': 19, 'label': 'Insight' },
            { 'id': 20, 'label': 'Intimidate' },
            { 'id': 21, 'label': 'Pillage' },
            { 'id': 22, 'label': 'No Attachments' },
            { 'id': 23, 'label': 'No Attachments Except Weapon' },
            { 'id': 24, 'label': 'Limited' },
            { 'id': 25, 'label': 'Terminal' },
            { 'id': 26, 'label': 'Shadows' }
        ];

        const interactions = [
            { 'id': 1,  'label': 'King' },
            { 'id': 2,  'label': 'Lord' },
            { 'id': 3,  'label': 'Lady' },
            { 'id': 4,  'label': 'Knight' },
            { 'id': 5,  'label': 'Ambush' },
            { 'id': 6,  'label': 'Stealth' },
            { 'id': 7,  'label': 'Renown' },
            { 'id': 8,  'label': 'Insight' },
            { 'id': 9,  'label': 'Intimidate' },
            { 'id': 10, 'label': 'Pillage' },
            { 'id': 11, 'label': 'Sacrifice' },
            { 'id': 12, 'label': 'Reserve' },
            { 'id': 13, 'label': 'Save' },
            { 'id': 14, 'label': 'Faction Card Kneel' },
            { 'id': 15, 'label': 'Attacks without kneel' },
            { 'id': 16, 'label': 'Defends without kneel' },
            { 'id': 17, 'label': 'Summer' },
            { 'id': 18, 'label': 'Winter' },
            { 'id': 19, 'label': 'STR adjust' },
            { 'id': 20, 'label': 'Search' },
            { 'id': 21, 'label': 'Targeted Kill' },
            { 'id': 22, 'label': 'Attack alone' },
            { 'id': 23, 'label': 'Choose' },
            { 'id': 24, 'label': 'Ranger' },
            { 'id': 25, 'label': 'Steward' },
            { 'id': 26, 'label': 'Builder' },
            { 'id': 27, 'label': 'Recursion' },
            { 'id': 28, 'label': 'Pseudo-Loyal' },
            { 'id': 29, 'label': 'Discard effect' },
            { 'id': 30, 'label': 'Claim raise' },
            { 'id': 31, 'label': 'Have more cards' },
            { 'id': 32, 'label': 'Remove from challenge' },
            { 'id': 33, 'label': 'Icon manipulation' },
            { 'id': 34, 'label': 'Plot used pile' },
            { 'id': 35, 'label': 'Recruit' },
            { 'id': 36, 'label': 'Shadows' },
            { 'id': 37, 'label': 'Cancel' }
        ];

        const reactions = [
            { 'id': 1,  'label': 'Enters Play' },
            { 'id': 3,  'label': 'Marshal' },
            { 'id': 5,  'label': 'Enters during challenges phase' },
            { 'id': 7,  'label': 'After Ambush' },
            { 'id': 8,  'label': 'After win challenge' },
            { 'id': 9,  'label': 'After win by 5' },
            { 'id': 10, 'label': 'After lose challenge' },
            { 'id': 11, 'label': 'After win unopposed' },
            { 'id': 12, 'label': 'After knelt' },
            { 'id': 13, 'label': 'Out of Shadows' },
            { 'id': 14, 'label': 'After win Dominance' },
            { 'id': 15, 'label': 'After lose Dominance' }
        ];

        const traits = [
            { 'id': 1,   'label': 'Ally' },
            { 'id': 2,   'label': 'Army' },
            { 'id': 3,   'label': 'Astapor' },
            { 'id': 4,   'label': 'Barge' },
            { 'id': 5,   'label': 'Bastard' },
            { 'id': 6,   'label': 'Blessing' },
            { 'id': 7,   'label': 'Bloodrider' },
            { 'id': 8,   'label': 'Braavos' },
            { 'id': 9,   'label': 'Brotherhood' },
            { 'id': 10,  'label': 'Builder' },
            { 'id': 11,  'label': 'Captain' },
            { 'id': 12,  'label': 'Cat' },
            { 'id': 13,  'label': 'Citadel' },
            { 'id': 14,  'label': 'Clansman' },
            { 'id': 15,  'label': 'Commander' },
            { 'id': 16,  'label': 'Companion' },
            { 'id': 17,  'label': 'Conclave' },
            { 'id': 18,  'label': 'Condition' },
            { 'id': 19,  'label': 'Contested' },
            { 'id': 20,  'label': 'Crown' },
            { 'id': 21,  'label': 'Direwolf' },
            { 'id': 22,  'label': 'Dorne' },
            { 'id': 23,  'label': 'Dothraki' },
            { 'id': 24,  'label': 'Dragon' },
            { 'id': 25,  'label': 'Dragonstone' },
            { 'id': 26,  'label': 'Dream' },
            { 'id': 27,  'label': 'Drowned God' },
            { 'id': 28,  'label': 'Edict' },
            { 'id': 29,  'label': 'Essos' },
            { 'id': 30,  'label': 'Fool' },
            { 'id': 31,  'label': 'Fortification' },
            { 'id': 32,  'label': 'Giant' },
            { 'id': 33,  'label': 'Guard' },
            { 'id': 34,  'label': 'Hatchling' },
            { 'id': 35,  'label': 'Iron Islands' },
            { 'id': 36,  'label': 'Ironborn' },
            { 'id': 37,  'label': 'Item' },
            { 'id': 38,  'label': 'King' },
            { 'id': 39,  'label': "King's Landing" },
            { 'id': 40,  'label': 'Kingdom' },
            { 'id': 41,  'label': 'Kingsguard' },
            { 'id': 42,  'label': 'Knight' },
            { 'id': 43,  'label': 'Lady' },
            { 'id': 44,  'label': 'Legacy' },
            { 'id': 45,  'label': 'Lhazareen' },
            { 'id': 46,  'label': 'Lord' },
            { 'id': 47,  'label': 'Maegi' },
            { 'id': 48,  'label': 'Maester' },
            { 'id': 49,  'label': 'Mercenary' },
            { 'id': 50,  'label': 'Merchant' },
            { 'id': 51,  'label': 'Minstrel' },
            { 'id': 52,  'label': 'Noble' },
            { 'id': 53,  'label': 'Old Gods' },
            { 'id': 54,  'label': 'Oldtown' },
            { 'id': 55,  'label': 'Omen' },
            { 'id': 56,  'label': 'Pentos' },
            { 'id': 57,  'label': 'Poison' },
            { 'id': 58,  'label': 'Prophecy' },
            { 'id': 59,  'label': 'Qarth' },
            { 'id': 60,  'label': 'Queen' },
            { 'id': 61,  'label': "R'hllor" },
            { 'id': 62,  'label': 'Raider' },
            { 'id': 63,  'label': 'Ranger' },
            { 'id': 64,  'label': 'Raven' },
            { 'id': 65,  'label': 'Recruit' },
            { 'id': 66,  'label': 'Riddle' },
            { 'id': 67,  'label': 'Sand Snake' },
            { 'id': 68,  'label': 'Scheme' },
            { 'id': 69,  'label': 'Siege' },
            { 'id': 70,  'label': 'Skill' },
            { 'id': 71,  'label': 'Small Council' },
            { 'id': 72,  'label': 'Smuggler' },
            { 'id': 73,  'label': 'Song' },
            { 'id': 74,  'label': 'Spy' },
            { 'id': 75,  'label': 'Steward' },
            { 'id': 76,  'label': 'Stormborn' },
            { 'id': 77,  'label': 'Storyteller' },
            { 'id': 78,  'label': 'Stronghold' },
            { 'id': 79,  'label': 'Summer' },
            { 'id': 80,  'label': 'The North' },
            { 'id': 81,  'label': 'The Reach' },
            { 'id': 82,  'label': 'The Riverlands' },
            { 'id': 83,  'label': 'The Seven' },
            { 'id': 84,  'label': 'The Westerlands' },
            { 'id': 85,  'label': 'Title' },
            { 'id': 86,  'label': 'Valyrian Steel' },
            { 'id': 87,  'label': 'Vehicle' },
            { 'id': 88,  'label': 'Wandering Crow' },
            { 'id': 89,  'label': 'War' },
            { 'id': 90,  'label': 'Warhorse' },
            { 'id': 91,  'label': 'Warlock' },
            { 'id': 92,  'label': 'Warship' },
            { 'id': 93,  'label': 'Weapon' },
            { 'id': 94,  'label': 'Westeros' },
            { 'id': 95,  'label': 'Wildling' },
            { 'id': 96,  'label': 'Winter' },
            { 'id': 97,  'label': 'Winterfell' },
            { 'id': 98,  'label': 'House Arryn' },
            { 'id': 99,  'label': 'House Bolton' },
            { 'id': 100, 'label': 'House Botley' },
            { 'id': 101, 'label': 'House Clegane' },
            { 'id': 102, 'label': 'House Dayne' },
            { 'id': 103, 'label': 'House Florent' },
            { 'id': 104, 'label': 'House Frey' },
            { 'id': 105, 'label': 'House Harlaw' },
            { 'id': 106, 'label': 'House Hightower' },
            { 'id': 107, 'label': 'House Hornwood' },
            { 'id': 108, 'label': 'House Manderly' },
            { 'id': 109, 'label': 'House Mormont' },
            { 'id': 110, 'label': 'House Redwyne' },
            { 'id': 111, 'label': 'House Reed' },
            { 'id': 112, 'label': 'House Tarly' },
            { 'id': 113, 'label': 'House Tully' },
            { 'id': 114, 'label': 'House Uller' },
            { 'id': 115, 'label': 'House Umber' },
            { 'id': 116, 'label': 'House Yronwood' },
            { 'id': 117, 'label': 'Banner' },
            { 'id': 118, 'label': 'Meereen' },
            { 'id': 119, 'label': 'The Citadel' },
            { 'id': 120, 'label': 'House Manwoody' },
            { 'id': 121, 'label': 'House Connington' },
            { 'id': 122, 'label': 'City' }
        ];

        return (
            <div className='inlineblock aligntop relativePosition'>
                <div>
                  <ImageCheckbox id={1} handleClickEvent={this.handleIconClick} checked={this.props.cardFilterList.Icons.some(x => x === 1)} imgPath={require('../../Images/icon-1.png')} altText='military' />
                  <ImageCheckbox id={2} handleClickEvent={this.handleIconClick} checked={this.props.cardFilterList.Icons.some(x => x === 2)} imgPath={require('../../Images/icon-2.png')} altText='intrigue' />
                  <ImageCheckbox id={3} handleClickEvent={this.handleIconClick} checked={this.props.cardFilterList.Icons.some(x => x === 3)} imgPath={require('../../Images/icon-3.png')} altText='power' />
                </div>

                <Checkbox label='Loyal' handleClickEvent={this.handleLoyalClick} checked={this.props.cardFilterList.Loyal} />
                <Checkbox label='Non-Loyal' handleClickEvent={this.handleNonLoyalClick} checked={this.props.cardFilterList.Nonloyal} />

                <Checkbox label='Unique' handleClickEvent={this.handleUniqueClick} checked={this.props.cardFilterList.Unique} />
                <Checkbox label='Non-Unique' handleClickEvent={this.handleNonUniqueClick} checked={this.props.cardFilterList.Nonunique} />

                <p>Cost Range:</p>
                <br /><br />
                <DoubleSlider handleUpdate={this.handleCostUpdate} min={0} max={8} />

                <p>Strength Range:</p>
                <br /><br />
                <DoubleSlider handleUpdate={this.handleStrengthUpdate} min={0} max={11} />

                <SelectGroup optionList={keywords} prefix='keyword' />
                <SelectGroup optionList={interactions} prefix='interaction' />
                <SelectGroup optionList={reactions} prefix='reaction' />
                <SelectGroup optionList={traits} prefix='trait' />
            </div>
        )
    }
}



export default RightPanel;
