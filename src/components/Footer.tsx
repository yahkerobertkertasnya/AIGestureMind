export default function Footer() {
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
                        <h3 className="text-3xl font-mostserrat font-bold text-[#272343]">GestureMind</h3>
                    </a>
                    <div
                        className=" w-fullmd:w-auto"
                        id="navbar-default">
                        <ul
                            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0
                        dark:border-gray-700">
                            <li className="px-8">
                                <a
                                    href="#"
                                    className="font-mostserrat text-lg font-bold block py-2 px-8 text-black rounded md:p-0"
                                    aria-current="page">
                                    SEMINAR
                                </a>
                            </li>
                            <li className="px-8">
                                <a
                                    href="#"
                                    className="font-mostserrat text-lg font-bold block py-2 px-8 text-black rounded md:p-0"
                                    aria-current="page">
                                    MISSION
                                </a>
                            </li>
                            <li className="px-8">
                                <a
                                    href="#"
                                    className="font-mostserrat text-lg font-bold block py-2 px-8 text-black rounded md:p-0"
                                    aria-current="page">
                                    PROJECT
                                </a>
                            </li>
                            <li className="px-8">
                                <a
                                    href="#"
                                    className="font-mostserrat text-lg font-bold block py-2 px-8 text-black rounded md:p-0"
                                    aria-current="page">
                                    SUPPORT
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center pr-10">
                        <p className="font-mostserrat text-lg font-bold text-[#272343] items-center">@2023 - GestureMind Team</p>
                        <p className="font-mostserrat text-lg font-bold text-[#272343] items-center">All Rights Reserved</p>
                    </div>
                </div>
            </nav>
        </>
    );
}
