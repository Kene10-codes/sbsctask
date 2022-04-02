import { Link } from 'react-router-dom'
import './linkpage.css'

const LinkPage = () => {
  return (
    <section>
        <Link to='/login' className='link__login'>Login</Link>
        <br />
        <Link className='link__home' to='/'>Home</Link>
        <Link className='link__account' to='/account-page'>Account Page</Link>
        <Link className='link__profile' to='/profile'>Profile Page</Link>
    </section>
  )
}

export default LinkPage