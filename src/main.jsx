
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga4';

ReactGA.initialize('G-Y6W7XK83ES');

// Track page views
const trackPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
};

ReactGA.pageview(window.location.pathname + window.location.search);

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
)
