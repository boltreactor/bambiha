import React, {Component} from 'react';

class Select3 extends Component {
    render() {
        const {options, value, name} = this.props
        return (
            <div className="mv2">
                {/*<span>Select Category</span>*/}
                <span>
                              <select name={name} id="size">
                                <option value="cat-1">Home</option>
                                <option value="cat-1">Men</option>
                                <option value="cat-2">Women</option>
                                <option value="cat-3">Men</option>
                                <option value="cat-4">Men</option>
                              </select>
                            </span>
            </div>

        );
    }
}

export default Select3;