import React, {Component} from 'react';

class Table extends Component {
    render() {
        const {headers, data} = this.props
        return (
            <div className="mdc-data-table">
                <table className="mdc-data-table__table" aria-label="Dessert calories">
                    <thead>
                    <tr className="mdc-data-table__header-row">
                        {headers.map((head) => <th className="mdc-data-table__header-cell" role="columnheader"
                                                   scope="col">{head}</th>
                        )}
                    </tr>
                    </thead>
                    <tbody className="mdc-data-table__content">
                    {data.map((d, index) => <tr data-row-id="u0" className="mdc-data-table__row">
                        <td className="mdc-data-table__cell" id="u0">{index+1}</td>
                        <td className="mdc-data-table__cell">image</td>
                        <td className="mdc-data-table__cell">{d.title}</td>
                        <td className="mdc-data-table__cell">{d.description}</td>
                        <td className="mdc-data-table__cell">cat</td>
                        <td className="mdc-data-table__cell">{d.quantity}</td>
                        <td className="mdc-data-table__cell">{d.price}</td>
                        <td className="mdc-data-table__cell">{d.date}</td>
                    </tr>)}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;