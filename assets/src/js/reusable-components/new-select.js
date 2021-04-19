import React, {Component, Fragment} from 'react';


class NewSelect extends Component {


    render() {
        const {onChange, data, value, name, placeholder} = this.props
        console.log(data)
        return (
             <span>
                 <select className="select-css"
                         name={name}
                         id={name}
                         onChange={onChange}
                         value={value}>
                     {name === "category_key" && <option default>{placeholder}</option>}
                     {data.map((item, index) => {

                         return <option  key={index || item.key} value={item.status ||  item.value}>{item.name || item.value}</option>
                     })}

                 </select>
             </span>

        );
    }
}
export default NewSelect;
