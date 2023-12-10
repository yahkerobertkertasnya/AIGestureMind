import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import CameraPage from "./pages/CameraPage.tsx";

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
                <Route
                    path="/camera"
                    element={<CameraPage />}
                />
            </Routes>
        </>
    );
}

export default App;
