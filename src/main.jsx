import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import BmiCalculator from './components/BmiCalculator.jsx'
import NotFound from './components/NotFound.jsx'


const router = createBrowserRouter([
  {
    path: "/", element: <App />,
  },
  {
    path: "/bmi", element: <BmiCalculator />,
  },
  {
    path: "*", element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
