import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './Components/DashBoard/DashBoard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <div className="bgImg">
    <DashBoard />
   </div>
  );
}

export default App;
