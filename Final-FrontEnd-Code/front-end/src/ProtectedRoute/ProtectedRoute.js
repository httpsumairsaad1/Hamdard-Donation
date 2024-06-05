// import React from 'react'
// import {useAuth} from '../context/AuthContext';
// import { Route, Navigate, Routes } from 'react-router-dom';


// const ProtectedRoute = ({component : Component, roles, ...rest}) => {
//   const {user} = useAuth();
  
//     return (
//       <Routes>
//     <Route
//     {...rest}
//     render={(props)=>{
//         if(!user || !roles.includes(user.role)){
//             return <Navigate to={{pathname : "/login"}}  />
//         }

//         return <Component {...props} />
//     }}
//     >
      
//     </Route>
//     </Routes>
//   )
// }

// export default ProtectedRoute
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      element={
        user && roles.includes(user.role) ? (
          <Component />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default ProtectedRoute;
