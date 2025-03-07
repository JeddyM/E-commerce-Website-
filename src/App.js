import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Login from "./Login.js"



function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <ToastContainer/>
        <Routes>
         <Route path="/" element={
                <> 
                
                <Home/>

                </>
         }
   
        
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
