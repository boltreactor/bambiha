import React, {Component, Fragment} from 'react';
import Select from "@material-ui/core/Select";
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";
class SelectText extends Component {
    render() {

        const checkout_country = [
            {"value": "United States of America (USA)"},
            {"value": "United Kingdom (UK)"},
        ];

        const ITEM_HEIGHT = 48;
        const ITEM_PADDING_TOP = 8;
        const MenuProps = {
            PaperProps: {
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: 250,
                },
            },
        };
        const {name, type, label, onChange, error, onClick, options, value} = this.props;
        return (
            <Fragment>
                <FormControl variant="filled" fullWidth>
                    <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
                    <Select
                        onBlur={onChange}
                        displayEmpty={true}
                        multiple={name === 'language'}
                        name={name}
                        labelId="demo-simple-select-filled-label"
                        id="select-multiple-chip"
                        value={name === 'category_key' ? value ? value : '' : value || []}
                        onChange={onChange}
                        renderValue={name === 'language' ? (options) => (
                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                {options && options.map((value) => (
                                    <div key={value} style={{marginRight: 2 + "px"}}>{value}</div>
                                ))}
                            </div>
                        ) : null}
                        MenuProps={MenuProps}
                    >

                        {

                        // name === "checkout_country" && checkout_country.map((country, id) => {
                        //     return <MenuItem key={id} value={country.value}>{country.value}</MenuItem>
                        // }) ||
                        // name === "checkout_currency" && options.map((status, id) => {
                        //     return <MenuItem key={id} value={status.value}>{status.value}</MenuItem>
                        // }) ||
                            name === "category_key" && options.map((status, id) => {
                            return <MenuItem key={id} value={status.value}>{status.value}</MenuItem>
                        })}

                    </Select>
                    {error && <div className="mdc-text-field-helper-line">
                        {error}
                        <div className="mdc-text-field-helper-text"
                             id="my-helper-id" aria-hidden="true"/>
                    </div>}
                </FormControl>
            </Fragment>

        );
    }
}

export default SelectText;
