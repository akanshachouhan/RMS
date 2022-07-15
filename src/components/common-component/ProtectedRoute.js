import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({path, comp, ...rest}) => {
    return (
        localStorage.getItem('userData')?<Route path={path} component={comp} {...rest}  />:
        <Redirect to={{
            pathname: "/"
          }} />
    )
}

export default ProtectedRoute
