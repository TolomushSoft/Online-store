import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import './index.scss'
import Telephones from "./pages/Telephones/Telephones";
import Tablets from "./pages/Tablet/Tablets";
import Drones from "./pages/Drones/Drones";
import Acsessuares from "./pages/Acsessuares/Acsessuares";
import Watches from "./pages/Watches";
import Home from "./components/Home/Home";
import About from "../src/pages/About/About";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/telephones" element={<Telephones/>}/>
                <Route path="/tablets" element={<Tablets/>}/>
                <Route path="/drones" element={<Drones/>}/>
                <Route path="/watches" element={<Watches/>}/>
                <Route path="/acsessuares" element={<Acsessuares/>}/>
                <Route path="/about" element={<About/>}/>

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
