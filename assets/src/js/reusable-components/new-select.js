import React, {Component, Fragment} from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
class NewSelect extends Component {
    render() {
        const {name, type, label, onChange, error, onClick, options, value} = this.props;
        return (
             <span>
                 <FormControl variant="filled" fullWidth>
                    <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
                 <select name={name} id="size"
                         onChange={onChange}
                         value={value}
                 >
                     {data.map((item, index) => {
                         return <option key={index} value={item.status}>{item.name}</option>
                     })}
                 </select>
                     {error && <div className="mdc-text-field-helper-line">
                        {error}
                        <div className="mdc-text-field-helper-text"
                             id="my-helper-id" aria-hidden="true"/>
                    </div>}
                </FormControl>
             </span>
        );
    }
}
export default NewSelect;