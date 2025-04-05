import { useEffect, useState } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import './index.css';
import RouteController from './router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import WebApp from '@twa-dev/sdk';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    tg.ready();

    
    WebApp.expand();

    // Get Telegram user info
    const tgUser = WebApp.initDataUnsafe?.user;
    if (tgUser) {
      setUser(tgUser);
    }

    // Optionally handle theme changes
    WebApp.onEvent('themeChanged', () => {
      document.body.style.backgroundColor = WebApp.themeParams.bg_color || "#fff";
      document.body.style.color = WebApp.themeParams.text_color || "#000";
    });

  }, []);

  return (
    <div
      style={{
        backgroundColor: WebApp.themeParams.bg_color || "#fff",
        color: WebApp.themeParams.text_color || "#000",
        minHeight: "100vh",
      }}
    >
      {/* Optional: Display user info at top for testing */}
      {user && (
        <div style={{ padding: '10px' }}>
          <p>👋 Welcome, {user.first_name} {user?.last_name || ''}</p>
          <p>🆔 Telegram ID: {user.id}</p>
          <p>📛 Username: @{user.username}</p>
        </div>
      )}

      <RouteController />
      <ToastContainer />
    </div>
  );
}

export default App;
