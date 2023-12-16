export default function OurProject() {
    return (
        <>
            <section className="flex flex-row w-full bg-white pb-20">
                <div className="flex flex-col w-full justify-center items-center">
                    <h1 className="text-2xl md:text-5xl font-mostserrat font-bold pt-8 md:pt-16 text-[#272343]">OUR PROJECTS</h1>
                    <div className="flex flex-row w-full">
                        <div className="flex flex-col w-1/2 justify-center items-center">
                            <h2 className="text-md md:text-4xl py-5 font-mostserrat font-bold pt-8 md:pt-16 text-[#272343]">1st Project</h2>
                            <img
                                src={"./assets/home/project-one.png"}
                                alt={""}
                                className="w-3/4 aspect-square shadow-md drop-shadow-md z-10"
                            />
                        </div>
                        <div className="flex flex-col w-1/2 justify-center items-center">
                            <h2 className="text-md md:text-4xl py-5 font-mostserrat font-bold pt-8 md:pt-16 text-[#272343]">2nd Project</h2>
                            <img
                                src={"./assets/home/project-two.png"}
                                alt={""}
                                className="w-3/4 aspect-square shadow-md drop-shadow-md z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
