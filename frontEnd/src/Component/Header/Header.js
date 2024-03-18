import { Link } from 'react-router-dom'
import './header.css'


export default function Header() {
    const logOut =()=>{
        window.localStorage.removeItem('email')
        window.location.pathname  ='/'
    }
    return (
        <div className="Header">
            <div className="HContainer">
                <div className="HLogo"> Sabry</div>
                <div className='HPages'>
                    <Link to='/'>Home</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                </div>
                {!window.localStorage.getItem('email')
                ? (<div className="HSign">
                    <Link to='/signup'>
                        <button className='btn btn-register'>Sign Up</button>
                    </Link>
                    <Link to='/login'>
                        <button className='btn btn-signin'>Sign in</button>
                    </Link>
                </div>
                 ): ( <button className='btn btn-register' onClick={logOut}>Log Out</button>)}
                
            </div>
        </div>
    )
}