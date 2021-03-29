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
                                    {/*<th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"*/}
                                    {/*    role="columnheader" scope="col">Price*/}
                                    {/*</th>*/}
                                    {/*<th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"*/}
                                    {/*    role="columnheader" scope="col">Quantity*/}
                                    {/*</th>*/}
                                    {/*<th className="mdc-data-table__header-cell"*/}
                                    {/*    role="columnheader" scope="col">Category*/}
                                    {/*</th>*/}
                                    {/*<th className="mdc-data-table__header-cell"*/}
                                    {/*    role="columnheader" scope="col">Description*/}
                                    {/*</th>*/}
                                    {/*<th className="mdc-data-table__header-cell"*/}
                                    {/*    role="columnheader" scope="col">Images*/}
                                    {/*</th>*/}
                                </tr>

                                </thead>
                                <tbody className="mdc-data-table__content">
                                {this.props.data.map(item => {
                                    return <tr key={item.id} data-row-id="u0"
                                               className="mdc-data-table__row transparent">
                                        <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">
                                            <RadioGroup
                                                value={this.props.id}
                                                onChange={this.props.onChange}
                                            >
                                                <FormControlLabel value={item.id}
                                                                  control={<Radio/>}
                                                />
                                            </RadioGroup>
                                        </td>
                                        {item.name &&
                                        <th className="mdc-data-table__cell tl"
                                            scope="row" id="u0">{item.name}
                                        </th>}

                                        {item.name &&
                                        <td className="mdc-data-table__cell tl" scope="row"
                                            id="u0">25-03-2021</td>}

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

                                        {item.title &&
                                        <td className="mdc-data-table__cell tl">category</td>}

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
                    <button className="btn btn-outline-primary btn-sm mr3">
                        <i className="material-icons-outlined" style={{fontSize: "16px"}}>block</i>
                        DISABLE
                    </button>
                    {/*<button className="btn btn-outline-danger btn-sm">*/}
                    {/*    <i className="material-icons-outlined"*/}
                    {/*       style="font-size: 16px;color: var(--danger);">delete</i>*/}
                    {/*    DELETE*/}
                    {/*</button>*/}
                </div>
            </div>

        );
    }
}

export default withRouter(CustomTable);