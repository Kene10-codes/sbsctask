import { Login, Layout, Profile, Home, AccountPage, Error404, RequireAuth, LinKPage } from 'component/index'
import { Link, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import AuthService from 'service/authService'

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if(user) {
      setCurrentUser(user)
    }
  }, [])

  const logOut = () => {
    AuthService.logout()
  }


  return (
    <div className='section'>

<nav>
        <div >
          <li >
            <Link to={"/home"}>
              Home
            </Link>
          </li>

          {currentUser && (
            <li className="nav-item">
              <Link to={"/profile"}>
                Profile
              </Link>
            </li>
          )}

        {currentUser && (       
        <li className="nav-item">
            <Link to={"/account-page"}>
              Account Page
            </Link>
            </li>
          )}
        </div>


        {currentUser ? (
          <div>
            <li>
              <a href="/login" onClick={logOut}>
                Logout
              </a>
            </li>
          </div>
        ) : (
          <div>
            <li className="nav-item">
              <Link to={"/login"} >
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/signup"} >
                Sign up
              </Link>
            </li>
          </div>
        )}
      </nav>
    <Routes>
      
         {/* unprotected routes */}
         <Route path="/login" element={<Login />} />

         {/* protectd routes */}
          <Route path="/" element={<Login />} />
          <Route path='/home' element={<Home />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/account-page" element={<AccountPage />} />

          <Route path="*" element={<Error404 />} />
        
       
    </Routes>
    </div>
  );
}

export default App;
