export default function SupportUs() {
    return (
        <section className="flex flex-col w-full bg-[#272343]">
            <div className="flex flex-row justify-center items-center">
                <img
                    src={"./src/assets/home/support-us.png"}
                    alt={""}
                    className="w-[40%] h-full object-cover"
                />
                <div className="bg-[#272343]">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-5xl font-mostserrat font-bold pt-16 text-white">SUPPORT US</h1>
                        <p className="text-2xl font-mostserrat w-3/4 py-16 text-center">Gesture Mind Foundation is dedicated to promoting Education, Awareness, and Accessibility for the Deaf Community around the world. Your generous contribution can help us achieve our mission and work towards building a more inclusive world. Join us in creating a brighter future for Deaf individuals by supporting our cause today.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
