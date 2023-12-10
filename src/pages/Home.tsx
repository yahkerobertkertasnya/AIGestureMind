import Header from "../components/Header.tsx";
import Navbar from "../components/Navbar.tsx";
import SignLanguageClass from "../components/SignLanguageClass.tsx";
import OurMission from "../components/OurMission.tsx";
import OurProject from "../components/OurProjects.tsx";
import SupportUs from "../components/SupportUs.tsx";
import Footer from "../components/Footer.tsx";
import { Section } from "../../enum/Section.ts";
import { useRef } from "react";

export default function Home() {
    const componentRefs = {
        [Section.TOP]: useRef<HTMLDivElement>(null),
        [Section.MISSION]: useRef<HTMLDivElement>(null),
        [Section.PROJECT]: useRef<HTMLDivElement>(null),
        [Section.SUPPORT_US]: useRef<HTMLDivElement>(null),
        [Section.SEMINAR]: useRef<HTMLDivElement>(null),
    };
    const navigateTo = (section: Section) => {
        if (section === Section.TOP) {
            componentRefs[Section.TOP].current?.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        if (section === Section.MISSION) {
            componentRefs[Section.MISSION].current?.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        if (section === Section.PROJECT) {
            componentRefs[Section.PROJECT].current?.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        if (section === Section.SUPPORT_US) {
            componentRefs[Section.SUPPORT_US].current?.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }
        if (section === Section.SEMINAR) {
            componentRefs[Section.SEMINAR].current?.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }
    };

    return (
        <div
            className="flex flex-col overflow-x-hidden"
            ref={componentRefs[Section.TOP]}>
            <Header />
            <Navbar navigateTo={navigateTo} />
            <div ref={componentRefs[Section.SEMINAR]}>
                <SignLanguageClass />
            </div>
            <div ref={componentRefs[Section.MISSION]}>
                <OurMission />
            </div>
            <div ref={componentRefs[Section.PROJECT]}>
                <OurProject />
            </div>
            <div ref={componentRefs[Section.SUPPORT_US]}>
                <SupportUs />
            </div>
            <Footer navigateTo={navigateTo} />
        </div>
    );
}
