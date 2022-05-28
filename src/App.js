import './App.css';
// import Dashboard from './dashboard/Dashboard';
// import { Routes, Route } from 'react-router-dom';
import ThemeConfig from './theme';
// // routes
import Router from './routes';
// import { Auth0Provider } from '@auth0/auth0-react';

// import Router from './routes';
// // theme
// import ThemeConfig from './theme';
// import GlobalStyles from './theme/globalStyles';
// // components
// import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <ThemeConfig>
      {/* <Auth0Provider
        domain="dev-o62k6jkx.us.auth0.com"
        clientId="kmiEV52EwNYUoQCPkBXEUbzmqGPoG6lw"
        redirectUri={window.location.origin}
      > */}
      {/* <ScrollToTop /> */}
      {/* <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes> */}
      <Router />
      {/* </Auth0Provider> */}
    </ThemeConfig>
  );
}

export default App;
