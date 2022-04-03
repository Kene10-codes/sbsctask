import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthService from 'service/authService'

import './linkpage.css'

const LinkPage = () => {
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
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <br></br>

        {currentUser && (
          <Link to={"/profile"}>Profile</Link>
        )}

        {currentUser ?
         <a href='/login' onClick={logOut}> Logout</a>
         : (
           <Link to={"/login"}>Log In</Link>
         )
        
       }
      </nav>
    </div>
    // <section>
    //     <Link to='/login' className='link__login'>Login</Link>
    //     <br />
    //     <Link className='link__home' to={'/'}>Home</Link>
    //     <Link className='link__account' to={'/account-page'}>Account Page</Link>
    //     <Link className='link__profile' to={'/profile'}>Profile Page</Link>
    // </section>
  )
}

export default LinkPage