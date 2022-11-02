import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
import MineApp from "../components/MineApp";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/minesweeper" element={<MineApp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;