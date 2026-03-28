import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
import App from './App.jsx'

const clientId=import.meta.env.VITE_GOOGLE_CLIENT_ID

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId={clientId}>
      <SnackbarProvider
      maxSnack={1}
      autoHideDuration={4000}
      preventDuplicate
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
    <App />
    </SnackbarProvider>
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
)
