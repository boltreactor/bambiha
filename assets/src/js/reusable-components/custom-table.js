import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

class CustomTable extends Component {

    state = {
        class: "mdc-data-table__header-cell"

    }


    handleClass = (name, e) => {
        e.preventDefault();
        if (name === "Price" || "Quantity" || "Date") {
            this.setState({class: "mdc-data-table__header-cell mdc-data-table__header-cell--numeric"})
        } else {
            this.setState({class: "mdc-data-table__header-cell"})
        }
    }


    render() {

        return (
            <div>
                <div className="custom-datatable overflow-x-auto overflow-y-hidden">
                    <div className="mdc-data-table hide-scrollbar"
                         data-mdc-auto-init="MDCDataTable">
                        <div className="mdc-data-table__table-container">
                            <table className="mdc-data-table__table"
                                   aria-label="Dessert calories">
                                <thead>
                                <tr className="mdc-data-table__header-row">
                                    <th className="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"
                                        role="columnheader" scope="col">
                                    </th>
                                    {this.props.headers.map((h, index) => {
                                        return <th key={index} className="mdc-data-table__header-cell"
                                                   role="columnheader" scope="col">{h.name}
                                        </th>
                                    })}

                                </tr>

                                </thead>
                                <tbody className="mdc-data-table__content">
                                {this.props.data.map((item, index) => {
                                    return <tr key={index} data-row-id="u0"
                                               className="mdc-data-table__row transparent">
                                        <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">
                                            <RadioGroup
                                                value={this.props.id}
                                                onChange={this.props.onChange}>
                                                <FormControlLabel value={item.id || item.order_key}
                                                                  control={<Radio/>}
                                                    // label={item.id || item.order_key}
                                                />
                                            </RadioGroup>
                                        </td>
                                        {
                                            item.first_name &&
                                            <th className="mdc-data-table__cell tl"
                                                scope="row" id="u0">{item.first_name}
                                            </th>
                                        }
                                        {item.name &&
                                        <th className="mdc-data-table__cell tl"
                                            scope="row" id="u0">{item.name}
                                        </th>}

                                        {item.order_number &&
                                        <th className="mdc-data-table__cell tl"
                                            scope="row" id="u0">{item.order_number}
                                        </th>}

                                        {item.user &&
                                        <th className="mdc-data-table__cell tl"
                                            scope="row" id="u0">{item.user}
                                        </th>}

                                        {item.user &&
                                        <td className="mdc-data-table__cell tl">{item.status}
                                        </td>}

                                        {item.name &&
                                        <td className="mdc-data-table__cell tl" scope="row"
                                            id="u0">{item.date}</td>}

                                        {item.name && (item.status === 1 ?
                                            <td className="mdc-data-table__cell tl" scope="row"
                                                id="u0">Enable</td> :
                                            <td className="mdc-data-table__cell tl" scope="row"
                                                style={{color: "#FF0000"}}
                                                id="u0">Disabled</td>)}

                                        {item.title &&
                                        <th className="mdc-data-table__cell tl"
                                            scope="row" id="u0">{item.title}
                                        </th>}

                                        {item.price &&
                                        <td className="mdc-data-table__cell tl">PKR
                                            {item.price}
                                        </td>}

                                        {item.quantity &&
                                        <td className="mdc-data-table__cell">{item.quantity}
                                        </td>}

                                        {item.category &&
                                        <td className="mdc-data-table__cell tl">{item.category}</td>}

                                        {item.description &&
                                        <td className="mdc-data-table__cell tl">{item.description}
                                        </td>}

                                        {item.images &&
                                        <td className="mdc-data-table__cell">{item.images.length}</td>}
                                    </tr>
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="tr mv3">
                    <button className="btn btn-outline-primary btn-sm mr3" onClick={(e) => this.props.onEdit(e)}>
                        <i className="material-icons-outlined"
                           style={{fontSize: '16px'}}>edit</i>
                        Edit
                    </button>
                    {this.props.onDelete===undefined ? <button className="btn btn-outline-primary btn-sm mr3" onClick={this.props.onDisable}>
                        <i className="material-icons-outlined" style={{fontSize: "16px"}}>block</i>
                        ENABLE/DISABLE
                    </button>:
                    <button className="btn btn-outline-danger btn-sm" onClick={this.props.onDelete}>
                        <i className="material-icons-outlined"
                           style={{fontSize: 16+"px", color:" var(--danger)"}}>delete</i>
                        DELETE
                    </button>}
                </div>
            </div>

        );
    }
}

export default withRouter(CustomTable);
