import React, { Component } from 'react';

class SelectGroup extends Component {
    render() {
        const options = this.props.optionList.map((x, i) =>
          <option key={i} id={this.props.prefix + '-' + x.id}>{x.label}</option>
        );

        return (
          <div>
            <select multiple>
              {options}
            </select>
          </div>
        )
    }
}

export default SelectGroup;
