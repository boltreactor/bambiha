import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonTableLoader = props => (
    <ContentLoader
        width={"100%"}
        height={"100%"}
        backgroundColor="#eaeced"
        foregroundColor="#ffffff"

        {...props}>

        <rect x="0" y="0" rx="3" ry="3" width="100%" height="50"/>
        <rect x="0" y="70" rx="3" ry="3" width="100%" height="20"/>
        <rect x="0" y="110" rx="3" ry="3" width="100%" height="20"/>
        <rect x="0" y="150" rx="3" ry="3" width="100%" height="20"/>
        <rect x="0" y="190" rx="3" ry="3" width="100%" height="20"/>

    </ContentLoader>
)


export default SkeletonTableLoader
