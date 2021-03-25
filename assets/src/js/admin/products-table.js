import React, {Component} from 'react';

class ProductsTable extends Component {
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
                                        <div
                                            className="mdc-checkbox mdc-data-table__header-row-checkbox mdc-checkbox--selected">
                                            <input type="checkbox"
                                                   className="mdc-checkbox__native-control"
                                                   aria-label="Toggle all rows"/>
                                            <div
                                                className="mdc-checkbox__background">
                                                <svg
                                                    className="mdc-checkbox__checkmark"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        className="mdc-checkbox__checkmark-path"
                                                        fill="none"
                                                        d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                                                </svg>
                                                <div
                                                    className="mdc-checkbox__mixedmark"/>
                                            </div>
                                            <div className="mdc-checkbox__ripple"/>
                                        </div>
                                    </th>
                                    <th className="mdc-data-table__header-cell"
                                        role="columnheader" scope="col">Product
                                        title
                                    </th>
                                    <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                                        role="columnheader" scope="col">Price
                                    </th>
                                    <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                                        role="columnheader" scope="col">Quantity
                                    </th>
                                    <th className="mdc-data-table__header-cell"
                                        role="columnheader" scope="col">Category
                                    </th>
                                    <th className="mdc-data-table__header-cell"
                                        role="columnheader" scope="col">Description
                                    </th>
                                    <th className="mdc-data-table__header-cell"
                                        role="columnheader" scope="col">Images
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="mdc-data-table__content">
                                {this.props.data.map(product=>{ return <tr data-row-id="u0"
                                    className="mdc-data-table__row transparent">
                                    <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">
                                        <div
                                            className="mdc-checkbox mdc-data-table__row-checkbox">
                                            <input type="checkbox"
                                                   className="mdc-checkbox__native-control"
                                                   aria-labelledby="u0"/>
                                            <div
                                                className="mdc-checkbox__background">
                                                <svg
                                                    className="mdc-checkbox__checkmark"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        className="mdc-checkbox__checkmark-path"
                                                        fill="none"
                                                        d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                                                </svg>
                                                <div
                                                    className="mdc-checkbox__mixedmark"/>
                                            </div>
                                            <div className="mdc-checkbox__ripple"/>
                                        </div>
                                    </td>
                                    <th className="mdc-data-table__cell tl"
                                        scope="row" id="u0">{product.title}
                                    </th>
                                    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">PKR
                                        {product.price}
                                    </td>
                                    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">{product.quantity}</td>
                                    <td className="mdc-data-table__cell">category</td>
                                    <td className="mdc-data-table__cell">{product.description}
                                    </td>
                                    <td className="mdc-data-table__cell">{product.images.length}</td>
                                </tr>
                                    })}
                                {/*<tr data-row-id="u0"*/}
                                {/*    className="mdc-data-table__row transparent">*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">*/}
                                {/*        <div*/}
                                {/*            className="mdc-checkbox mdc-data-table__row-checkbox">*/}
                                {/*            <input type="checkbox"*/}
                                {/*                   className="mdc-checkbox__native-control"*/}
                                {/*                   aria-labelledby="u0"/>*/}
                                {/*            <div*/}
                                {/*                className="mdc-checkbox__background">*/}
                                {/*                <svg*/}
                                {/*                    className="mdc-checkbox__checkmark"*/}
                                {/*                    viewBox="0 0 24 24">*/}
                                {/*                    <path*/}
                                {/*                        className="mdc-checkbox__checkmark-path"*/}
                                {/*                        fill="none"*/}
                                {/*                        d="M1.73,12.91 8.1,19.28 22.79,4.59"/>*/}
                                {/*                </svg>*/}
                                {/*                <div*/}
                                {/*                    className="mdc-checkbox__mixedmark"/>*/}
                                {/*            </div>*/}
                                {/*            <div className="mdc-checkbox__ripple"/>*/}
                                {/*        </div>*/}
                                {/*    </td>*/}
                                {/*    <th className="mdc-data-table__cell tl"*/}
                                {/*        scope="row" id="u0">Watch*/}
                                {/*    </th>*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">PKR*/}
                                {/*        2500*/}
                                {/*    </td>*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">2</td>*/}
                                {/*    <td className="mdc-data-table__cell">Men</td>*/}
                                {/*    <td className="mdc-data-table__cell">Bambiha*/}
                                {/*        traditional watch with hand made leather.*/}
                                {/*    </td>*/}
                                {/*    <td className="mdc-data-table__cell">6</td>*/}
                                {/*</tr>*/}
                                {/*<tr data-row-id="u0"*/}
                                {/*    className="mdc-data-table__row transparent">*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">*/}
                                {/*        <div*/}
                                {/*            className="mdc-checkbox mdc-data-table__row-checkbox">*/}
                                {/*            <input type="checkbox"*/}
                                {/*                   className="mdc-checkbox__native-control"*/}
                                {/*                   aria-labelledby="u0"/>*/}
                                {/*            <div*/}
                                {/*                className="mdc-checkbox__background">*/}
                                {/*                <svg*/}
                                {/*                    className="mdc-checkbox__checkmark"*/}
                                {/*                    viewBox="0 0 24 24">*/}
                                {/*                    <path*/}
                                {/*                        className="mdc-checkbox__checkmark-path"*/}
                                {/*                        fill="none"*/}
                                {/*                        d="M1.73,12.91 8.1,19.28 22.79,4.59"/>*/}
                                {/*                </svg>*/}
                                {/*                <div*/}
                                {/*                    className="mdc-checkbox__mixedmark"/>*/}
                                {/*            </div>*/}
                                {/*            <div className="mdc-checkbox__ripple"/>*/}
                                {/*        </div>*/}
                                {/*    </td>*/}
                                {/*    <th className="mdc-data-table__cell tl"*/}
                                {/*        scope="row" id="u0">Watch*/}
                                {/*    </th>*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">PKR*/}
                                {/*        2500*/}
                                {/*    </td>*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">2</td>*/}
                                {/*    <td className="mdc-data-table__cell">Men</td>*/}
                                {/*    <td className="mdc-data-table__cell">Bambiha*/}
                                {/*        traditional watch with hand made leather.*/}
                                {/*    </td>*/}
                                {/*    <td className="mdc-data-table__cell">6</td>*/}
                                {/*</tr>*/}
                                {/*<tr data-row-id="u0"*/}
                                {/*    className="mdc-data-table__row transparent">*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">*/}
                                {/*        <div*/}
                                {/*            className="mdc-checkbox mdc-data-table__row-checkbox">*/}
                                {/*            <input type="checkbox"*/}
                                {/*                   className="mdc-checkbox__native-control"*/}
                                {/*                   aria-labelledby="u0"/>*/}
                                {/*            <div*/}
                                {/*                className="mdc-checkbox__background">*/}
                                {/*                <svg*/}
                                {/*                    className="mdc-checkbox__checkmark"*/}
                                {/*                    viewBox="0 0 24 24">*/}
                                {/*                    <path*/}
                                {/*                        className="mdc-checkbox__checkmark-path"*/}
                                {/*                        fill="none"*/}
                                {/*                        d="M1.73,12.91 8.1,19.28 22.79,4.59"/>*/}
                                {/*                </svg>*/}
                                {/*                <div*/}
                                {/*                    className="mdc-checkbox__mixedmark"/>*/}
                                {/*            </div>*/}
                                {/*            <div className="mdc-checkbox__ripple"/>*/}
                                {/*        </div>*/}
                                {/*    </td>*/}
                                {/*    <th className="mdc-data-table__cell tl"*/}
                                {/*        scope="row" id="u0">Watch*/}
                                {/*    </th>*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">PKR*/}
                                {/*        2500*/}
                                {/*    </td>*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">2</td>*/}
                                {/*    <td className="mdc-data-table__cell">Men</td>*/}
                                {/*    <td className="mdc-data-table__cell">Bambiha*/}
                                {/*        traditional watch with hand made leather.*/}
                                {/*    </td>*/}
                                {/*    <td className="mdc-data-table__cell">6</td>*/}
                                {/*</tr>*/}
                                {/*<tr data-row-id="u0"*/}
                                {/*    className="mdc-data-table__row transparent">*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">*/}
                                {/*        <div*/}
                                {/*            className="mdc-checkbox mdc-data-table__row-checkbox">*/}
                                {/*            <input type="checkbox"*/}
                                {/*                   className="mdc-checkbox__native-control"*/}
                                {/*                   aria-labelledby="u0"/>*/}
                                {/*            <div*/}
                                {/*                className="mdc-checkbox__background">*/}
                                {/*                <svg*/}
                                {/*                    className="mdc-checkbox__checkmark"*/}
                                {/*                    viewBox="0 0 24 24">*/}
                                {/*                    <path*/}
                                {/*                        className="mdc-checkbox__checkmark-path"*/}
                                {/*                        fill="none"*/}
                                {/*                        d="M1.73,12.91 8.1,19.28 22.79,4.59"/>*/}
                                {/*                </svg>*/}
                                {/*                <div*/}
                                {/*                    className="mdc-checkbox__mixedmark"/>*/}
                                {/*            </div>*/}
                                {/*            <div className="mdc-checkbox__ripple"/>*/}
                                {/*        </div>*/}
                                {/*    </td>*/}
                                {/*    <th className="mdc-data-table__cell tl"*/}
                                {/*        scope="row" id="u0">Watch*/}
                                {/*    </th>*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">PKR*/}
                                {/*        2500*/}
                                {/*    </td>*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">2</td>*/}
                                {/*    <td className="mdc-data-table__cell">Men</td>*/}
                                {/*    <td className="mdc-data-table__cell">Bambiha*/}
                                {/*        traditional watch with hand made leather.*/}
                                {/*    </td>*/}
                                {/*    <td className="mdc-data-table__cell">6</td>*/}
                                {/*</tr>*/}
                                {/*<tr data-row-id="u0"*/}
                                {/*    className="mdc-data-table__row transparent">*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">*/}
                                {/*        <div*/}
                                {/*            className="mdc-checkbox mdc-data-table__row-checkbox">*/}
                                {/*            <input type="checkbox"*/}
                                {/*                   className="mdc-checkbox__native-control"*/}
                                {/*                   aria-labelledby="u0"/>*/}
                                {/*            <div*/}
                                {/*                className="mdc-checkbox__background">*/}
                                {/*                <svg*/}
                                {/*                    className="mdc-checkbox__checkmark"*/}
                                {/*                    viewBox="0 0 24 24">*/}
                                {/*                    <path*/}
                                {/*                        className="mdc-checkbox__checkmark-path"*/}
                                {/*                        fill="none"*/}
                                {/*                        d="M1.73,12.91 8.1,19.28 22.79,4.59"/>*/}
                                {/*                </svg>*/}
                                {/*                <div*/}
                                {/*                    className="mdc-checkbox__mixedmark"/>*/}
                                {/*            </div>*/}
                                {/*            <div className="mdc-checkbox__ripple"/>*/}
                                {/*        </div>*/}
                                {/*    </td>*/}
                                {/*    <th className="mdc-data-table__cell tl"*/}
                                {/*        scope="row" id="u0">Watch*/}
                                {/*    </th>*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">PKR*/}
                                {/*        2500*/}
                                {/*    </td>*/}
                                {/*    <td className="mdc-data-table__cell mdc-data-table__cell--numeric">2</td>*/}
                                {/*    <td className="mdc-data-table__cell">Men</td>*/}
                                {/*    <td className="mdc-data-table__cell">Bambiha*/}
                                {/*        traditional watch with hand made leather.*/}
                                {/*    </td>*/}
                                {/*    <td className="mdc-data-table__cell">6</td>*/}
                                {/*</tr>*/}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="tr mv3">
                    <button className="btn btn-outline-primary btn-sm mr3">
                        <i className="material-icons-outlined"
                           style={{fontSize: '16px'}}>edit</i>
                        Edit
                    </button>
                    <button className="btn btn-outline-danger btn-sm">
                        <i className="material-icons-outlined" style={{
                            fontSize: '16px',
                            color: 'var(--danger)'
                        }}>delete</i>
                        DELETE
                    </button>
                </div>
            </div>

        );
    }
}

export default ProductsTable;