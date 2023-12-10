import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ContactUs from "./pages/ContactUs.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/contact-us"
                    element={<ContactUs />}
                />
            </Routes>
        </>
    );
}

export default App;
