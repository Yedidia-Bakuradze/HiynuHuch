import '@/app/ui/login.css'

export default function login() {
  return (
    <main >
      <div className="login-container">
      <form action="" className="form-login">
        <ul className="login-nav">
          <li className="login-nav__item active"><a href="#">Sign In</a></li>
          <li className="login-nav__item">
            <a href="#">Sign Up</a>
          </li>
        </ul>
        <label htmlFor="login-input-user" className="login__label"> Username </label>
        <input id="login-input-user" className="login__input" type="text" />
        <label htmlFor="login-input-password" className="login__label">
          Password
        </label>
        <input id="login-input-password" className="login__input" type="password" />
        <label htmlFor="login-sign-up" className="login__label--checkbox">
          <input
            id="login-sign-up"
            type="checkbox"
            className="login__input--checkbox"
          />
          Keep me Signed in
        </label>
        <a href="./" target="">
          <div className="login__submit">Sign in</div>
        </a>
      </form>
      <a href="#" className="login__forgot">Forgot Password?</a>
    </div>
    </main>
  );
}
