import Header from "../components/Header.tsx";
import Navbar from "../components/Navbar.tsx";
import SignLanguageClass from "../components/SignLanguageClass.tsx";
import OurMission from "../components/OurMission.tsx";
import OurProject from "../components/OurProjects.tsx";
import SupportUs from "../components/SupportUs.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <Header />
            <Navbar />
            <SignLanguageClass />
            <OurMission />
            <OurProject />
            <SupportUs />
            <Footer />
        </div>
    );
}
