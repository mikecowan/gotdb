import React, { Component } from 'react';
import './ImageCheckbox.css';

class ImageCheckbox extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    this.props.handleClickEvent(!this.props.checked, this.props.id);
  }

  render() {
    let checkedClass = '';
    if (this.props.checked) {
      checkedClass='checked';
    }

    return (
      <div className={checkedClass + ' iconwrap'}  onClick={this.click}>
        <img src={this.props.imgPath} alt={this.props.altText} className='icon' />
      </div>
    )
  }
}

export default ImageCheckbox;
