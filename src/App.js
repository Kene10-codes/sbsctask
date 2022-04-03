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
          {currentUser && (
            <li>
              <Link to={"/profile"}>
                Profile
              </Link>
            </li>
          )}

        {currentUser && (       
        <li>
            <Link to={"/account-page"}>
              Account Page
            </Link>
            </li>
          )}

          {currentUser && (
              <li >
              <Link to={"/home"}>
                Home
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
            <li>
              <Link to={"/login"} >
                Login
              </Link>
            </li>
          </div>
        )}
      </nav>

    <Routes path="/" element={<Layout />} >
         {/* unprotected routes */}
         <Route path={"/login"} element={<Login />} />

         {/* protectd routes */}
          <Route path={"/"} element={<Login />} />
          <Route path={'/home'} element={<Home />}/>
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/account-page"} element={<AccountPage />} />

          <Route path="*" element={<Error404 />} />
    </Routes>
    </div>
  );
}

export default App;
