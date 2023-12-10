import { Section } from "../../enum/Section.ts";

interface Navbar {
    navigateTo: (section: Section) => void;
}

export default function Navbar({ navigateTo }: Navbar) {
    return (
        <>
            <nav className="bg-[#ECF8F5] w-[100vw] border-gray-200 shadow-md drop-shadow-md z-10">
                <div className="flex flex-wrap items-center justify-between p-4">
                    <a
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src="./src/assets/logo.png"
                            className="h-16 object-center object-contain"
                            alt="Flowbite Logo"
                        />
                    </a>
                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-default">
                        <ul
                            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0
                        dark:border-gray-700">
                            <li
                                className="px-8 cursor-pointer"
                                onClick={() => navigateTo(Section.TOP)}>
                                <a
                                    className="font-mostserrat text-lg font-bold block py-2 px-8 text-black rounded md:p-0"
                                    aria-current="page">
                                    HOME
                                </a>
                            </li>
                            <li
                                className="px-8 cursor-pointer"
                                onClick={() => navigateTo(Section.PROJECT)}>
                                <a
                                    className="font-mostserrat text-lg font-bold block py-2 px-8 text-black rounded md:p-0"
                                    aria-current="page">
                                    PROJECT
                                </a>
                            </li>
                            <li
                                className="px-8 cursor-pointer"
                                onClick={() => navigateTo(Section.CONTACT_US)}>
                                <a
                                    className="font-mostserrat text-lg font-bold block py-2 px-8 text-black rounded md:p-0"
                                    aria-current="page">
                                    CONTACT US
                                </a>
                            </li>
                            <li
                                className="px-8 cursor-pointer"
                                onClick={() => navigateTo(Section.SUPPORT_US)}>
                                <a
                                    className="font-mostserrat text-lg font-bold block py-2 px-8 text-black rounded md:p-0"
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
