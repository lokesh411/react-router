import React from 'react'
import { Outlet } from 'react-router-dom';

const FeedsRouter = () => {
    return (
        <div>
            <h1>
                Feed section
            </h1>
            {/** this outlet will be replaced by the child */}
            <Outlet />
        </div>
    )
}

export default FeedsRouter;