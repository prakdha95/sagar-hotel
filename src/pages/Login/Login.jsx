import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'

const Login = () => {

  const [currentState, setCurrentState] = useState('Login')
  const navigate = useNavigate()

  return (
    <>
      {currentState === 'Login' ? (
        <section className='user_login'>
          <div className="login_container">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder='email' />
              <input type="password" placeholder='password' />
              <button>LOGIN</button>
              <small>Forgot password? <span onClick={() => navigate('/reset-password')}>RESET</span></small>
              <small>Not user? <span onClick={() => setCurrentState('Sign Up')}>REGISTER</span></small>
            </form>
          </div>
        </section>
      ) :
        (
          <section className='user_login'>
            <div className="login_container">
              <h2>Register</h2>
              <form>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button>REGISTER</button>
                <small>Already an user? <span onClick={() => setCurrentState('Login')}>LOGIN</span></small>
              </form>
            </div>
          </section>
        )

      }
    </>
  )
}

export default Login
