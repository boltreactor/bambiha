import React, {Component} from 'react'
import ContentLoader from 'react-content-loader'
import {connect} from "react-redux";

class SkeletonTableLoader extends Component {
    render() {
        const {skeleton} = this.props;
        if (!skeleton) return null;
        return (
            <ContentLoader
                width={"100%"}
                height={"100%"}
                backgroundColor="#eaeced"
                foregroundColor="#ffffff"

                {...this.props}>

                <rect x="0" y="0" rx="3" ry="3" width="100%" height="50"/>
                <rect x="0" y="70" rx="3" ry="3" width="100%" height="20"/>
                <rect x="0" y="110" rx="3" ry="3" width="100%" height="20"/>
                <rect x="0" y="150" rx="3" ry="3" width="100%" height="20"/>
                <rect x="0" y="190" rx="3" ry="3" width="100%" height="20"/>

            </ContentLoader>
        )
    }
}

const mapStateToProps = (state) => ({
    skeleton: state.user.skeleton,
})

export default connect(mapStateToProps)(SkeletonTableLoader);
