import './assets/style/Style.scss';
import "./assets/style/Media.scss"
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () =>{
  return (
    <Router >
        <Header />
        <Routes>
            <Route path="/" element={<MainPage />}/>
        </Routes>
    </Router>
  );
}

export default App
