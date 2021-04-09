import React, {Component, Fragment} from 'react';


class NewSelect extends Component {


    render() {
        const {onChange, data} = this.props
        return (
            <span>
                 <select name="size" id="size"
                         onChange={onChange}>
                     {data.map((status, index) => {
                         return <option key={index} value={status.name}>{status.name}</option>
                     })}

                 </select>
             </span>

        );
    }
}

export default NewSelect;
