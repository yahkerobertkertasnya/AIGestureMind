import Navbar from "../components/Navbar.tsx";
import CameraScreen from "../components/CameraScreen.tsx";
import Footer from "../components/Footer.tsx";

export default function CameraPage() {
    const navigateTo = () => {
        //
    };

    // const debouncedPrediction = debounce(handleHandImage, 1);

    return (
        <div className="overflow-hidden m-0 p-0">
            <Navbar navigateTo={navigateTo} />
            <CameraScreen />
            <Footer navigateTo={navigateTo} />
        </div>
    );
}
