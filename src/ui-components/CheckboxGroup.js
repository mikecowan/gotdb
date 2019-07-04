import React, { Component } from 'react';
import Checkbox from './Checkbox';

class CheckboxGroup extends Component {
  constructor(props) {
      super(props);

      this.btnClick = this.btnClick.bind(this);
  }

  btnClick(ev, idx, isAllBox) {
    let list = this.props.checkedItemIndices;

    if (isAllBox) {
      list = [];
      if (ev.currentTarget.checked) {
        list = this.props.labels.map(x => x.index);
      }
    }
    else {
      if (!ev.currentTarget.checked && list.some(x => x === idx)) {
        const itemIndex = list.indexOf(idx);
        list.splice(itemIndex, 1);
      }
      else if (ev.currentTarget.checked && !list.some(x => x === idx)) {
        list.push(idx);
      }

    }

    this.props.handleChange(list);
  }

  render() {
    let allBox = null;
    if (this.props.all !== undefined) {
      allBox = <Checkbox id={this.props.prefix + '-' + this.props.all.suffix}
                          label={this.props.all.label} allBox={true}
                          checked={this.props.labels.length === this.props.checkedItemIndices.length}
                          handleClickEvent={this.btnClick} />;
    }

    const boxes = this.props.labels.map((l, i) =>
      <Checkbox key={i} index={l.index} id={this.props.prefix + '-' + l.index} label={l.label}
        checked={this.props.checkedItemIndices.some(x => x === l.index)}
        handleClickEvent={this.btnClick} />
    );

    return (
      <div>
        {allBox}
        {boxes}
      </div>
    )
  }
}

export default CheckboxGroup;
