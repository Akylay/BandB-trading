import './assets/style/Style.scss';
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/About";
import Form from "./components/Form";

const App = () =>{
  return (
    <Router >
        <Header />
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/register" element={<Form/>}/>
        </Routes>
    </Router>
  );
}

export default App
