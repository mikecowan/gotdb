import React, { Component } from 'react';

class Table extends Component {
    func = () => {
        const val = this.props.inputvalue * 4;
        return val;
    }

    // {this.func()}

    render() {
        return (
            <table>
                <thead>
                    {this.props.header}
                </thead>

                <tbody>
                    {this.props.body}
                </tbody>
            </table>
        )
    }
}

export default Table;
