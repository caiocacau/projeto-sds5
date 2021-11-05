import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;