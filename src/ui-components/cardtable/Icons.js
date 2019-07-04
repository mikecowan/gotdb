import React, { Component } from 'react';

class Icons extends Component {
  render() {
    const images = this.props.iconList.map((x, i) =>
      <img key={i} src={require('../../Images/icon-' + (x.hasIcon ? x.iconId : 0) + '.png')} className={(!x.hasIcon ? 'transparent' : '') + ' icon'} alt={x.val} />
    );

    return (
      <span>{images}</span>
    );
  }
}

export default Icons;
