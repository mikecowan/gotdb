import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Row from './ui-components/Row/Row';
//import Table from './ui-components/Table/Table';
import LeftPanel from './ui-components/Panel/LeftPanel';
import CenterPanel from './ui-components/Panel/CenterPanel';
import RightPanel from './ui-components/Panel/RightPanel';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardList: [],
            selectedCard: null
        };

        
    }

    componentDidMount() {
        // TODO: get all cards on load, store in state.cardList ... reduce number of DB calls
    }

    FetchValue = (cardId) => {
        let localList = this.state.cardList;

        const cardQuery = localList.filter(c => c.cardId === cardId);
        let firstCard = null;
        if (cardQuery.length === 1) {
            firstCard = cardQuery[0];
        }

        if (firstCard === null) {
            fetch('http://localhost:64205/api/Got/GetCardsById/' + cardId)
                .then(response => response.json())
                .then(data => {
                        console.log(data);

                        localList.push(data);
                        this.setState({
                            cardList: localList,
                            selectedCard: data
                        });

                    }
                );
        }
        else {
            this.setState({
                selectedCard: firstCard
            });
        }



    }

    header = () => {
        //const val = '<th><tr>header row</tr></th>';
        const val = <div></div>//<Row isHeader />;
        return val;
    }

    jsonRequest = () => {
        const request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:64205/api/Got/GetCardsById/310', true);

        let jsonData = [];
        console.log('initialized array: ' + jsonData);
        let data = null;

        request.onload = function() {
            data = JSON.parse(this.responseText);
            if (request.readyState === 4 && request.status === "200") {
                jsonData.push(data);
                console.log('data push: ' + jsonData[0].cardName);
                
            }
            else {
                console.error(jsonData);
                console.log('data error: ' + jsonData[0]);
                
            }
        }

        request.send();

        console.log(jsonData);
        console.log('just before return: ' + jsonData[0]);

        let retVal = 'card name: ';
        if (data !== null) {
            retVal += data.cardName;
        }

        return retVal;
    }

    functionTest = () => {
        return 'hello';
    }

    render() {
        return (
            <div className="App">
                
                <LeftPanel card={this.state.selectedCard} getCard={this.FetchValue} />
                <CenterPanel />
                <RightPanel />

            </div>
        );
    }
}

export default App;
