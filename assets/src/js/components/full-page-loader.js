import React, {Component} from "react";
import {connect} from "react-redux";
import LoaderGif from "../../images/Infinity-1s-207px.gif"

class FullPageLoader extends Component {
    render() {
        const {loading} = this.props;
        if (!loading) return null;
        return (
            <div className="loader-container">
                <div className="loader">
                    <img src={LoaderGif}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.user.loading,
})
export default connect(mapStateToProps)(FullPageLoader);