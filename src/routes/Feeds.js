import React from 'react'
import { useNavigate } from 'react-router-dom'

const feedList = [
    {
        key: "lockdown",
        title: "Lockdown"
    },
    {
        key: "happy_birthday",
        title: "Happy birthday"
    }
]

const Feeds = () => {
    const navigate = useNavigate();
    const onFeedClick = (key) => {
        navigate(`/feed/${key}`, {
            state: {
                key,
                tab: "feeds"
            }
        })
    }
    return (
        <div>
            <h3>
                Here are your feeds...
            </h3>
            <ul>
                {
                    feedList.map(item => (
                        <li>
                            {/* <Link key={item.key} to={`/feed/${item.key}`}>
                                {item.title}
                            </Link> */}
                            <div key={item.key} style={{ cursor: "pointer", margin: 10, padding: 10 }} onClick={() => {
                                onFeedClick(item.key)
                            }}>
                                {item.title}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Feeds;