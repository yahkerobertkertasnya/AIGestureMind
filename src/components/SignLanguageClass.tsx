export default function SignLanguageClass() {
    return (
        <section className="relative w-full bg-gray-700 bg-blend-multiply">
            <img
                src={"./assets/home/sign-language-class.png"}
                className={"absolute z-[1] w-full object-cover"}
                alt={""}
            />
            <div className="relative h-auto w-[100vw] z-10">
                <div className="flex flex-row px-4 mx-auto max-w-screen-xl h-[49vw] text-center">
                    <div className="flex flex-col w-full align-middle justify-center">
                        {/*<h1 className="font-mostserrat align-middle justify-center mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">GestureMind</h1>*/}
                        {/*<p className="font-mostserrat mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Sign Language for a Better World</p>*/}
                    </div>
                </div>
            </div>
        </section>
    );
}
