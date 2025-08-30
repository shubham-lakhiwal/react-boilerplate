import App from './App'
import React from 'react'
import { createRoot } from "react-dom/client"

const rootElement = document.getElementById('root');
if(rootElement) {
  const root = createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  );
}