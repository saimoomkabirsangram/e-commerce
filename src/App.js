import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Router/Router';

function App() {
  return (
    <RouterProvider router={Router}></RouterProvider>
    
  );
}

export default App;
