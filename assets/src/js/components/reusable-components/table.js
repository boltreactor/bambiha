import React, {Component} from 'react';

class Table extends Component {
  render() {
    return (
        <div className="mdc-data-table">
          <table className="mdc-data-table__table" aria-label="Dessert calories">
            <thead>
            <tr className="mdc-data-table__header-row">
              <th className="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox" role="columnheader" scope="col">
                <div className="mdc-checkbox mdc-data-table__header-row-checkbox mdc-checkbox--selected">
                  <input type="checkbox" className="mdc-checkbox__native-control" aria-label="Checkbox for header row selection"/>
                  <div className="mdc-checkbox__background">
                    <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                      <path className="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"/>
                  </div>
                </div>
              </th>
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Status</th>
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Signal name</th>
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Severity</th>
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Stage</th>
              <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Time</th>
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Roles</th>
            </tr>
            </thead>
            <tbody className="mdc-data-table__content">
            <tr data-row-id="u0" className="mdc-data-table__row">
              <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">
                <div className="mdc-checkbox mdc-data-table__row-checkbox">
                  <input type="checkbox" className="mdc-checkbox__native-control" aria-labelledby="u0"/>
                  <div className="mdc-checkbox__background">
                    <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                      <path className="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"/>
                  </div>
                </div>
              </td>
              <td className="mdc-data-table__cell">Online</td>
              <td className="mdc-data-table__cell" id="u0">Arcus watch slowdown</td>
              <td className="mdc-data-table__cell">Medium</td>
              <td className="mdc-data-table__cell">Triaged</td>
              <td className="mdc-data-table__cell mdc-data-table__cell--numeric">0:33</td>
              <td className="mdc-data-table__cell">Allison Brie</td>
            </tr>
            <tr data-row-id="u1" className="mdc-data-table__row mdc-data-table__row--selected" aria-selected="true">
              <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">
                <div className="mdc-checkbox mdc-data-table__row-checkbox mdc-checkbox--selected">
                  <input type="checkbox" className="mdc-checkbox__native-control" checked aria-labelledby="u1"/>
                  <div className="mdc-checkbox__background">
                    <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                      <path className="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
              </td>
              <td className="mdc-data-table__cell">Offline</td>
              <td className="mdc-data-table__cell" id="u1">monarch: prod shared ares-managed-features-provider-heavy</td>
              <td className="mdc-data-table__cell">Huge</td>
              <td className="mdc-data-table__cell">Triaged</td>
              <td className="mdc-data-table__cell mdc-data-table__cell--numeric">0:33</td>
              <td className="mdc-data-table__cell">Brie Larson</td>
            </tr>
            <tr data-row-id="u2" className="mdc-data-table__row mdc-data-table__row--selected" aria-selected="true">
              <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">
                <div className="mdc-checkbox mdc-data-table__row-checkbox mdc-checkbox--selected">
                  <input type="checkbox" className="mdc-checkbox__native-control" checked aria-labelledby="u2"/>
                  <div className="mdc-checkbox__background">
                    <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                      <path className="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
              </td>
              <td className="mdc-data-table__cell">Online</td>
              <td className="mdc-data-table__cell" id="u2">monarch: prod shared ares-managed-features-provider-heavy</td>
              <td className="mdc-data-table__cell">Minor</td>
              <td className="mdc-data-table__cell">Not triaged</td>
              <td className="mdc-data-table__cell mdc-data-table__cell--numeric">0:33</td>
              <td className="mdc-data-table__cell">Jeremy Lake</td>
            </tr>
            <tr data-row-id="u3" className="mdc-data-table__row">
              <td className="mdc-data-table__cell mdc-data-table__cell--checkbox">
                <div className="mdc-checkbox mdc-data-table__row-checkbox">
                  <input type="checkbox" className="mdc-checkbox__native-control" aria-labelledby="u3"/>
                  <div className="mdc-checkbox__background">
                    <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                      <path className="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
              </td>
              <td className="mdc-data-table__cell">Online</td>
              <td className="mdc-data-table__cell" id="u3">Arcus watch slowdown</td>
              <td className="mdc-data-table__cell">Negligible</td>
              <td className="mdc-data-table__cell">Triaged</td>
              <td className="mdc-data-table__cell mdc-data-table__cell--numeric">0:33</td>
              <td className="mdc-data-table__cell">Angelina Cheng</td>
            </tr>
            </tbody>
          </table>
        </div>
    );
  }
}

export default Table;