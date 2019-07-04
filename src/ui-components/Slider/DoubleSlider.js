import React, { Component } from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
import './Slider.css';


class DoubleSlider extends Component {
  onUpdate = (ev) => {
    const min = parseInt(ev[0], 0);
    const max = parseInt(ev[1], 0);
    this.props.handleUpdate(min, max);
  }

  render() {
    const { min, max } = this.props;

    return (
      <div className='slider'>
        <Nouislider
          connect
          start={[0, max]}
          range={{
            min: min,
            max: max
          }}
          step={1}
          tooltips={true}
          onUpdate={this.onUpdate}
        />
      </div>
    )
  }
}

export default DoubleSlider;
