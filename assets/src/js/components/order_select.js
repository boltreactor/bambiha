import React, {Component} from 'react';

class OrderSelect extends Component {


    render() {
        const {onChange, data, value} = this.props
        return (
            <span>
             <select className="select-css" name="size" id="size" onChange={onChange} value={value}>
                 {data.map((status, index) => {
                     return <option key={index} value={status.status}>{status.name}</option>
                 })}
             </select>
         </span>

        );
    }
}

export default OrderSelect;

