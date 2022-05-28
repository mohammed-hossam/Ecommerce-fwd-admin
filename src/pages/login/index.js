import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  console.log('location', location);
  console.log('navigate', navigate);
  // let auth = useAuth();
  let auth = { user: '' };
  const { loginWithRedirect } = useAuth0();

  let from = location.state?.from?.pathname || '/';

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get('username');

    loginWithRedirect()
    // auth.signin(username, () => {
    //   // Send them back to the page they tried to visit when they were
    //   // redirected to the login page. Use { replace: true } so we don't create
    //   // another entry in the history stack for the login page.  This means that
    //   // when they get to the protected page and click the back button, they
    //   // won't end up back on the login page, which is also really nice for the
    //   // user experience.
    //   navigate(from, { replace: true });
    // });
  }

  //me
  if (auth.user) {
    return <Navigate to={from} replace />;
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>
        <Button type="submit" size="large">
          Sign in with Auth0
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
