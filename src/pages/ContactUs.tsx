import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import { Section } from "../../enum/Section.ts";
import { FaDiscord, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function ContactUs() {
    const navigateTo = (section: Section) => {
        console.log(section);
    };

    return (
        <div className="relative overflow-x-hidden">
            <Navbar navigateTo={navigateTo} />
            <section className="flex flex-col">
                <img
                    src="./src/assets/contactUs/background.png"
                    className="absolute h-[100vh] w-[100vw] object-cover z-[0] opacity-70"
                    alt="contact-us"
                />
                <div className="flex flex-row h-[100vh] items-center justify-center z-[10]">
                    <div className="flex flex-row">
                        <div className="hidden lg:flex flex-col">
                            <article className="flex flex-row py-10">
                                <FaWhatsapp className="w-20 text-[5rem]" />
                                <div className="flex flex-col ml-5 w-[20rem] justify-center gap-2">
                                    <h1 className="text-2xl font-mostserrat">MOBILE</h1>
                                    <div className="h-0.5 w-full bg-white" />
                                    <h1 className="text-2xl font-mostserrat">+62 812 3456 7890</h1>
                                </div>
                            </article>
                            <article className="flex flex-row py-10">
                                <MdMailOutline className="w-20 text-[5rem]" />
                                <div className="flex flex-col ml-5 w-[20rem] justify-center gap-2">
                                    <h1 className="text-2xl font-mostserrat">E-MAIL</h1>
                                    <div className="h-0.5 w-full bg-white" />
                                    <h1 className="text-2xl font-mostserrat">hello@gesturemind.com</h1>
                                </div>
                            </article>
                            <article className="flex flex-row py-10">
                                <IoLocationOutline className="w-20 text-[5rem]" />
                                <div className="flex flex-col ml-5 w-[20rem] justify-center gap-2">
                                    <h1 className="text-2xl font-mostserrat">LOCATION</h1>
                                    <div className="h-0.5 w-full bg-white" />
                                    <h1 className="text-2xl font-mostserrat">723 Cornelia Street</h1>
                                </div>
                            </article>
                            <h3 className="text-xl font-mostserrat text-center pt-10">Follow Us:</h3>
                            <section className="flex flex-row gap-10 justify-center pt-5">
                                <FaInstagram className="w-20 text-[3rem]" />
                                <FaDiscord className="w-20 text-[3rem]" />
                                <FaYoutube className="w-20 text-[3rem]" />
                            </section>
                        </div>
                        <div className="flex flex-col lg:ps-24">
                            <h3 className="text-5xl font-mostserrat text-center lg:pt-10">Contact Us</h3>
                            <p className="text-xl font-mostserrat text-center pb-5">We are here to help!</p>
                            <div className="flex flex-row w-[90vw] lg:w-[30vw] mx-auto">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="border-2 text-black font-mostserrat bg-white w-1/2 rounded-lg p-2 mt-5 mr-2.5"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="border-2 text-black font-mostserrat bg-white w-1/2 rounded-lg p-2 mt-5 ml-2.5"
                                />
                            </div>
                            <div className="flex flex-row w-[90vw] lg:w-[30vw] mx-auto">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="border-2 text-black font-mostserrat bg-white w-full rounded-lg p-2 mt-5"
                                />
                            </div>
                            <div className="flex flex-row w-[90vw] lg:w-[30vw] mx-auto">
                                <textarea
                                    placeholder="Message"
                                    className="border-2 h-48 text-black font-mostserrat bg-white w-full rounded-lg p-2 mt-5"
                                />
                            </div>
                            <div className="flex flex-row w-[30rem] mx-auto justify-center">
                                <button className="bg-[#272343] text-white w-1/2 rounded-lg p-2 mt-5">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer navigateTo={navigateTo} />
        </div>
    );
}
