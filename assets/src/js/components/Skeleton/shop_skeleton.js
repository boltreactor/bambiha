import React, {Component} from 'react'
import ContentLoader from 'react-content-loader'
import {connect} from "react-redux";

class SkeletonShopLoader extends Component {

    render() {
        const {skeleton} = this.props;
        if (!skeleton) return null;
        return (
            <ContentLoader
                viewBox="0 0 1360 400"
                width={"100%"}
                height={"100%"}
                backgroundColor="#eaeced"
                foregroundColor="#ffffff"
                {...this.props}>
                <rect x="30" y="20" rx="8" ry="8" width="300" height="300"/>
                <rect x="30" y="350" rx="0" ry="0" width="300" height="18"/>
                <rect x="30" y="375" rx="0" ry="0" width="120" height="20"/>

                <rect x="350" y="20" rx="8" ry="8" width="300" height="300"/>
                <rect x="350" y="350" rx="0" ry="0" width="300" height="18"/>
                <rect x="350" y="375" rx="0" ry="0" width="120" height="20"/>

                <rect x="670" y="20" rx="8" ry="8" width="300" height="300"/>
                <rect x="670" y="350" rx="0" ry="0" width="300" height="18"/>
                <rect x="670" y="375" rx="0" ry="0" width="120" height="20"/>

                <rect x="990" y="20" rx="8" ry="8" width="300" height="300"/>
                <rect x="990" y="350" rx="0" ry="0" width="300" height="18"/>
                <rect x="990" y="375" rx="0" ry="0" width="120" height="20"/>

            </ContentLoader>
        );

    }


}


const mapStateToProps = (state) => ({
    skeleton: state.user.skeleton,
})
export default connect(mapStateToProps)(SkeletonShopLoader);
