import {BrowserRouter, Route,  Routes } from 'react-router-dom';
import Home from './Page/Home'
import './index';
import Signup from './Page/Signup';
import Login from './Page/Login';
import NgoDashboard from './NgoDashboard/NgoDashboard';
import CompanyDashboard from './CompanyDashboard/CompanyDashboard';
import {AuthProvider, useAuth} from './context/AuthContext';
import Verification from './components/verificationPage/Verification';
function App() {
  // const user = useAuth();
  // console.log(user);
  return (
    // <AuthProvider>
    // <BrowserRouter>
    //   <Routes>
    //   <Route path='/' element={<Home />}/>
    //   <Route path='/login' element={<Login />}/>
    //   <Route path='/signup' element={<Signup />}/>
    //   <Route path='/ngo/dashboard' element={
    //     <ProtectedRoute roles={['ngo']}>
    //       <NgoDashboard />
    //     </ProtectedRoute>
    //   }
    //   />
    //   <Route path='/company/dashboard' element={
    //     <ProtectedRoute roles={['ngo']}>
    //       <CompanyDashboard />
    //     </ProtectedRoute>
    //   }
    //   />
    //   </Routes>
    // </BrowserRouter>
    // </AuthProvider>
<AuthProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verification" element={<Verification />} />
      {/* <Route path="/ngo/dashboard" element={<ProtectedRoute roles={['ngo']}><NgoDashboard /></ProtectedRoute>} /> */}
      {/* <Route path="/company/dashboard" element={<ProtectedRoute roles={['company']}><CompanyDashboard /></ProtectedRoute>} /> */}
      
      {/* { user.role=== 'ngo' &&  <Route path="/ngo/dashboard" element={<NgoDashboard />} />}
      {user.role === 'company' && <Route path="/company/dashboard" element={<CompanyDashboard />}/>} */}
        <Route path="/ngo/dashboard" element={<NgoDashboard />} />
       <Route path="/company/dashboard" element={<CompanyDashboard />}/>
    
    </Routes>
  </BrowserRouter>
</AuthProvider>

  );
}

export default App;
