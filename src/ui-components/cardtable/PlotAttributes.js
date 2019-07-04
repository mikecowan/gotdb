import React, { Component } from 'react';

class PlotAttributes extends Component {
  render() {

    const stats = <div>
                    <img src={require('../../Images/g-' + this.props.statList[0].val + '.png')} className='icon' alt={this.props.statList[0].val} />
                    <img src={require('../../Images/i-' + this.props.statList[1].val + '.png')} className='icon' alt={this.props.statList[1].val} />
                    <img src={require('../../Images/c-' + this.props.statList[2].val + '.png')} className='icon' alt={this.props.statList[2].val} />
                    <img src={require('../../Images/r-' + this.props.statList[3].val + '.png')} className='icon' alt={this.props.statList[3].val} />
                  </div>

    return (
      <div>
        {stats}
      </div>
    );
  }
}

export default PlotAttributes;

