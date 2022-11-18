import React from 'react'
import { Outlet, Link, NavLink} from 'react-router-dom'

const MainHeader = () => {
    return (
        <div>
            <div>
                <p> <NavLink to={'/'}>Restart</NavLink></p>
            </div>
            <Outlet />
        </div>
    )
}

export default MainHeader