import { Section } from "../../enum/Section.ts";

interface Navbar {
    navigateTo: (section: Section) => void;
    isHome?: boolean;
}

export default function Navbar({ navigateTo, isHome = false }: Navbar) {
    return (
        <>
            <nav className="bg-[#ECF8F5] w-[100vw] border-gray-200 shadow-md drop-shadow-md z-50">
                <div className="flex flex-wrap items-center justify-between p-4">
                    <a
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src="./assets/logo.png"
                            className="h-8 sm:h-16 object-center object-contain"
                            alt="Flowbite Logo"
                        />
                    </a>
                    <div
                        className="flex flex-col justify-center items-center lg:block lg:w-auto"
                        id="navbar-default">
                        <ul className="font-medium text-[0.6rem] lg:text-lg flex flex-row p-1 lg:p-4 border border-gray-100 rounded-lg">
                            <li
                                className="px-1 lg:px-8 cursor-pointer"
                                onClick={() => navigateTo(Section.TOP)}>
                                <a
                                    href={"/"}
                                    onClick={(e) => (isHome ? e.preventDefault() : "")}
                                    className="font-mostserrat font-bold block py-2 px-1 lg:px-4 text-black rounded lg:p-0"
                                    aria-current="page">
                                    HOME
                                </a>
                            </li>
                            <li
                                className="px-1 lg:px-8 cursor-pointer"
                                onClick={() => navigateTo(Section.PROJECT)}>
                                <a
                                    href={"/?section=project"}
                                    onClick={(e) => (isHome ? e.preventDefault() : "")}
                                    className="font-mostserrat font-bold block py-2 px-1 lg:px-4 text-black rounded lg:p-0"
                                    aria-current="page">
                                    PROJECT
                                </a>
                            </li>
                            <li
                                className="px-1 lg:px-8 cursor-pointer"
                                onClick={() => navigateTo(Section.CONTACT_US)}>
                                <a
                                    // onClick={(e) => (isHome ? e.preventDefault() : "")}
                                    href={"contact-us"}
                                    className="font-mostserrat font-bold block py-2 px-1 lg:px-4 text-black rounded lg:p-0"
                                    aria-current="page">
                                    CONTACT US
                                </a>
                            </li>
                            <li
                                className="px-1 lg:px-8 cursor-pointer"
                                onClick={() => navigateTo(Section.SUPPORT_US)}>
                                <a
                                    href={"/?section=support-us"}
                                    onClick={(e) => (isHome ? e.preventDefault() : "")}
                                    className="font-mostserrat font-bold block py-2 px-1 lg:px-4 text-black rounded lg:p-0"
                                    aria-current="page">
                                    SUPPORT US
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
