import { Routes, Route } from 'react-router-dom'
import FeedsRouter from './FeedParent'
import Feeds from './Feeds'
import Feed from './Feed'
import Profile from './Profile'
import Home from './Home'
import Login from './Login'
import Fallback from './Fallback'

const RoutingFramework = () => {
    return (
        <Routes>
            <Route key="home" path="/" element={<Home />} />
            <Route key="feedsParent" path="/feed" element={<FeedsRouter />} >
                <Route key="feeds" path="/feed" element={<Feeds />} />
                <Route key="feed" path="/feed/:feedId" element={<Feed />} />
            </Route>
            <Route key="profile" path="/profile" element={<Profile />} />
            <Route key="login" path="/login" element={<Login />} />
            <Route key="fallback" path="*" element={<Fallback />} />
        </Routes>
    )
}

export default RoutingFramework;