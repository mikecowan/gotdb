import React, { Component } from 'react';
import './App.css';
import LeftPanel from './ui-components/Panel/LeftPanel';
import CenterPanel from './ui-components/Panel/CenterPanel';
import RightPanel from './ui-components/Panel/RightPanel';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullCardList: [],
      cardList: [],
      subList: [],
      showImg: false,
      imgSrc: '',
      imgCoords: [0, 0],
      showLeftPanel: true,
      showRightPanel: true,
      stateFilter: {
        'Factions': [1],
        'Types': [1],
        'Icons': [],
        'Loyal': true,
        'Nonloyal': true,
        'Unique': true,
        'Nonunique': true,
        'CostRange': { 'min': 0, 'max': 8 },
        'StrengthRange': { 'min': 0, 'max': 11 },
        'Keywords': [],
        'Interactions': [],
        'Reactions': [],
        'Traits': []
      }
    };

    this.LoadCardsWithFilterFetch = this.LoadCardsWithFilterFetch.bind(this);
    this.SetCardFilter = this.SetCardFilter.bind(this);

    this.LoadCardsWithFilterFetch(this.state.stateFilter);
    this.imgRoll = this.imgRoll.bind(this);
    this.toggleLeft = this.toggleLeft.bind(this)
  }

  componentDidMount() {
    // TODO: get all cards on load, store in state.cardList ... reduce number of DB calls
  }

  LoadAllCards = () => {
    fetch('http://localhost:64205/api/Got/GetCards')
      .then(response => response.json())
      .then(data => {
        this.setState({
          fullCardList: data
        });

        console.log(data);
      });
  }

  LoadCardsWithFilterFetch = (cardFilter) => {
    let localList = [];
    // filter.Factions = [1, 2, 7]
    // localList may be missing cards that have factionId 7 ...

    let needApiCall = false;
    cardFilter.Factions.forEach(factionId => {
      if (!this.state.fullCardList.some(x => x.FactionId === factionId)) {
        needApiCall = true;
      }
    });

    if (needApiCall) {
      const url = 'http://codedozer.net/gotapi/api/Got/GetCardsWithFilter';
      //const url = 'http://localhost:64205/api/Got/GetCardsWithFilter';
      fetch(url, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardFilter)
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            fullCardList: data,
            subList: this.GetFilteredCards(data, cardFilter) //data.filter(x => cardFilter.Factions.some(y => y === x.FactionId) && cardFilter.Types.some(z => z === x.TypeId))
          });
        });

    }
    else {
      //localList = this.state.fullCardList.filter(x => cardFilter.Factions.some(y => y === x.FactionId) && cardFilter.Types.some(z => z === x.TypeId));
      localList = this.state.fullCardList;
      this.setState({
        subList: this.GetFilteredCards(localList, cardFilter)
      });
    }
    //console.log(localList);
  }

  GetFilteredCards = (cardList, cardFilter) => {
    let filteredList = cardList.filter(x => cardFilter.Factions.some(y => y === x.FactionId) && cardFilter.Types.some(z => z === x.TypeId));

    filteredList = filteredList.filter(x => x.TypeId > 4 || (x.Cost <=  cardFilter.CostRange.max && x.Cost >= cardFilter.CostRange.min));
    filteredList = filteredList.filter(x => x.TypeId > 1 || (x.Strength <= cardFilter.StrengthRange.max && x.Strength >= cardFilter.StrengthRange.min));

    if (cardFilter.Icons.length > 0) {
      if (cardFilter.Icons.some(x => x === 1)) {
        filteredList = filteredList.filter(x => x.TypeId > 1 || x.Military);
      }
      if (cardFilter.Icons.some(x => x === 2)) {
        filteredList = filteredList.filter(x => x.TypeId > 1 || x.Intrigue);
      }
      if (cardFilter.Icons.some(x => x === 3)) {
        filteredList = filteredList.filter(x => x.TypeId > 1 || x.Power);
      }
    }

    if (!cardFilter.Loyal) {
      filteredList = filteredList.filter(x => !x.Loyal);
    }
    if (!cardFilter.Nonloyal) {
      filteredList = filteredList.filter(x => x.Loyal);
    }
    if (!cardFilter.Unique) {
      filteredList = filteredList.filter(x => !x.Uniq);
    }
    if (!cardFilter.Nonunique) {
      filteredList = filteredList.filter(x => x.Uniq);
    }

    return filteredList;
  }

  SetCardFilter(cardFilter) {
    const list = this.state.fullCardList;
    this.setState({
      stateFilter: cardFilter,
      subList: this.GetFilteredCards(list, cardFilter)
    });
  }

  imgRoll = (ev, CardId) => {
    let imgSuffix = '.png';
    if (CardId > 833) {
        imgSuffix = '.jpg';
    }

    let coords = [];
    coords.push(ev.pageX);
    coords.push(ev.pageY);

    this.setState({
      showImg: true,
      imgSrc: require('./Images/CardImages/' + CardId + imgSuffix),
      imgCoords: coords
    });
  }

  closeImg = () => {
    this.setState({
      showImg: false
    });
  }

  toggleLeft = () => {
    const newState = !this.state.showLeftPanel
    this.setState({
      showLeftPanel: newState
    });
  }

  toggleRight = () => {
    const newState = !this.state.showRightPanel
    this.setState({
      showRightPanel: newState
    });
  }

  render() {
    const src = this.state.imgSrc;
    const showImgClass = this.state.showImg ? 'show' : 'hide';
    const imgStyle = {
      left: this.state.imgCoords[0] + 200,
      top: this.state.imgCoords[1]
    }

    const leftPanel = this.state.showLeftPanel ? <LeftPanel filterCards={this.SetCardFilter} loadCards={this.LoadCardsWithFilterFetch} cardFilterList={this.state.stateFilter} showLeftPanel={this.state.showLeftPanel} /> : '';
    const rightPanel = this.state.showRightPanel ? <RightPanel filterCards={this.SetCardFilter} cardFilterList={this.state.stateFilter} showRightPanel={this.state.showRightPanel} /> : '';
    return (
      <div className="App">
        <img src={src} className={showImgClass + ' floatImg'} alt='card' onClick={this.closeImg} style={imgStyle} />
        {leftPanel}
        <CenterPanel cardList={this.state.subList} imgRoll={this.imgRoll} showLeftPanel={this.state.showLeftPanel} showRightPanel={this.state.showRightPanel} toggleLeft={this.toggleLeft} toggleRight={this.toggleRight} />
        {rightPanel}
      </div>
    );
  }
}

export default App;
