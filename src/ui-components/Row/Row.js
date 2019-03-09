import React, { Component } from 'react';

            //<div>faction icon</div>
            //<div>unique icon</div>
            //<div>card name</div>
            //<div>card type</div>
            //<div>cost</div>
            //<div>strength</div>
            //<div>icons</div>
            //<div>income</div>
            //<div>initiative</div>
            //<div>claim</div>
            //<div>reserve</div>

const Row = (props) => {
    const isHeader = props.isHeader;
    const cellValues = props.cellValues;

    if (isHeader) {
        return <div>this is a header</div>
    }

    return (
        <div>
            {isHeader}
        </div>
    )
}

export default Row;
