import React, { Component } from 'react';

class LeftPanel extends Component {
    constructor(props) {
        super(props);

        this.getCard = this.getCard.bind(this);

        this.state = {
            textval: ''
        };
    }

    getCard(ev) {
        const intVal = parseInt(ev.currentTarget.value);
        this.setState({ textval: intVal });

        const test = this.state.textval;
        console.log(test);

        this.props.getCard(intVal);
    }

    render() {
        const card = this.props.card;

        const cardName = card === null ? '' : card.cardName;

        return (
            <div className='inlineblock aligntop'>
                <p>{cardName}</p>
                <input type="text" onChange={this.getCard} value={this.state.textvalue} />
                
                <ul>
                    <li>ALL</li>
                    <li>Neutral</li>
                    <li>Stark</li>
                    <li>Lannister</li>
                    <li>Baratheon</li>
                    <li>Greyjoy</li>
                    <li>Tyrell</li>
                    <li>Martell</li>
                    <li>Targaryen</li>
                    <li>Night's Watch</li>
                </ul>

                <ul>
                    <li>ALL</li>
                    <li>Characters</li>
                    <li>EVents</li>
                    <li>Attachments</li>
                    <li>Locations</li>
                    <li>Plots</li>
                    <li>Agendas</li>
                </ul>
            </div>
        )
    }
}

export default LeftPanel;
