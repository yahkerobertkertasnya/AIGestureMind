import { Section } from "../../enum/Section.ts";

interface Footer {
    navigateTo: (section: Section) => void;
}

export default function Footer({ navigateTo }: Footer) {
    return (
        <>
            <nav className="bg-[#ECF8F5] w-[100vw] border-gray-200 shadow-md drop-shadow-md z-10">
                <div className="flex flex-row flex-wrap items-center justify-center lg:justify-between p-4">
                    <a
                        href="/"
                        className="hidden lg:flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src="./assets/logo.png"
                            className="h-8 sm:h-16  object-center object-contain"
                            alt="Flowbite Logo"
                        />
                        <h3 className="hidden lg:block text-[0.6rem] lg:text-3xl font-mostserrat font-bold text-[#272343]">GestureMind</h3>
                    </a>
                    <div
                        className="w-full flex flex-col lg:w-auto justify-center items-center"
                        id="navbar-default">
                        <ul className="text-[0.6rem] lg:text-lg justify-center items-center font-medium flex flex-row p-2 lg:p-4 lg:p-0 border border-gray-100 rounded-lg">
                            <li
                                className="px-1 lg:px-8 cursor-pointer "
                                onClick={() => navigateTo(Section.SEMINAR)}>
                                <a
                                    className="font-mostserrat font-bold block lg:py-2 lg:px-8 text-black rounded lg:p-0"
                                    aria-current="page">
                                    SEMINAR
                                </a>
                            </li>
                            <li
                                className="px-1 lg:px-8 cursor-pointer"
                                onClick={() => navigateTo(Section.MISSION)}>
                                <a
                                    className="font-mostserrat font-bold block lg:py-2 lg:px-8 text-black rounded lg:p-0"
                                    aria-current="page">
                                    MISSION
                                </a>
                            </li>
                            <li
                                className="px-1 lg:px-8 cursor-pointer"
                                onClick={() => navigateTo(Section.PROJECT)}>
                                <a
                                    className="font-mostserrat font-bold block lg:py-2 lg:px-8 text-black rounded lg:p-0"
                                    aria-current="page">
                                    PROJECT
                                </a>
                            </li>
                            <li
                                className="px-1 lg:px-8 cursor-pointer"
                                onClick={() => navigateTo(Section.SUPPORT_US)}>
                                <a
                                    className="font-mostserrat font-bold block lg:py-2 lg:px-8 text-black rounded lg:p-0"
                                    aria-current="page">
                                    SUPPORT
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center lg:pr-10">
                        <p className="text-[0.3rem] lg:text-2xl font-mostserrat font-bold text-[#272343] items-center">@2023 - GestureMind Team</p>
                        <p className="text-[0.3rem] lg:text-2xl font-mostserrat font-bold text-[#272343] items-center">All Rights Reserved</p>
                    </div>
                </div>
            </nav>
        </>
    );
}
