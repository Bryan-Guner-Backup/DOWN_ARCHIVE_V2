import React from 'react'
import { useOktaAuth } from '@okta/okta-react'

const Logout = () => {
    const { authService } = useOktaAuth();

    // okta logout redirects to '/'
    const logout = async () => {
        authService.logout('/')
    }

    return (
        <button className="logout" onClick={logout}>Log Out</button>
    )
}

export default Logout