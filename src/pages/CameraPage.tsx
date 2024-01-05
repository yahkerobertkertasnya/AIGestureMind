import Navbar from "../components/Navbar.tsx";
import CameraScreen from "../components/CameraScreen.tsx";
import Footer from "../components/Footer.tsx";
import { useEffect } from "react";

export default function CameraPage() {
    const navigateTo = () => {
        //
    };

    useEffect(() => {
        console.log(window);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        console.log(window["Hands"]);
    }, []);

    // const debouncedPrediction = debounce(handleHandImage, 1);

    return (
        <div className="overflow-hidden m-0 p-0">
            <Navbar navigateTo={navigateTo} />
            <CameraScreen />
            <Footer navigateTo={navigateTo} />
        </div>
    );
}
