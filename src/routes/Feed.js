import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const Feed = (props) => {
    const params = useParams()
    const location = useLocation()
    console.log("Checking if this is getting renderred params :: ", params, location.state)
    return (
        <h1>
            Displaying a single feed, the selected feed is {params.feedId}
        </h1>
    )
}

export default Feed;