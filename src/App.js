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
import AboutTelephones from "../src/pages/About/AboutTelephones";
import  AboutTablets from "../src/pages/About/AboutTablets";
import  AboutMac from "../src/pages/About/AboutMac";
import  AboutDrone from "../src/pages/About/AboutDrones";
import  AboutWatch from "../src/pages/About/AboutWatch";



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
                <Route path="/macbooks" element={<Acsessuares/>}/>
                <Route path="/abouttel" element={<AboutTelephones/>}/>
                <Route path="/abouttab" element={<AboutTablets/>}/>
                <Route path="/aboutdrone" element={<AboutDrone/>}/>
                <Route path="/aboutmac" element={<AboutMac/>}/>
                <Route path="/aboutwatch" element={<AboutWatch/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
