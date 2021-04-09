import React, {Component, Fragment} from 'react';



class NewSelect extends Component {


    render() {
         const {onChange, data, value} = this.props
        return (
             <span>
                 <select className="select-css" name="size" id="size"
                         onChange={onChange}
                         value={value}
                 >
                     {data.map((item, index) => {
                         return <option key={index} value={item.status || item.key}>{item.name || item.value}</option>
                     })}

                 </select>
             </span>

        );
    }
}
export default NewSelect;
