import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
      super(props);
      this.click = this.click.bind(this);
  }

  click(ev) {
    this.props.handleClickEvent(ev, this.props.index, this.props.allBox === true);
  }

  render() {
    return (
      <div>
        <label>
          <input id={this.props.id}
                  checked={this.props.checked}
                  onChange={this.click}
                  type="checkbox" />
            {this.props.label}
        </label>
      </div>
    )
  }
}

export default Checkbox;
