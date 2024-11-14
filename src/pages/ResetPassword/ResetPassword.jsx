import './ResetPassword.css'

const ResetPassword = () => {
  return (
    <>
      <section className='user_login'>
        <div className="login_container">
            <h2>Password Reset</h2>
            <form>
                <input type="email" placeholder='Enter your email' />
                <button>SEND EMAIL</button>
            </form>
        </div>
      </section>
    </>
  )
}

export default ResetPassword
