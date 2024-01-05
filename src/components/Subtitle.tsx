import SubtitleSingleton from "../../controller/misc/SubtitleSingleton.ts";
import { useEffect, useState } from "react";

export default function Subtitle() {
    const [text, setText] = useState("");
    const subtitleSingleton = SubtitleSingleton.getInstance();

    const handleKeyDown = (e: KeyboardEvent) => {
        //de;ete

        if (e.key === "Backspace") {
            setText((prev) => prev.slice(0, -1));
        }
    };

    useEffect(() => {
        subtitleSingleton.setSubtitle = setText;
    }, [text]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <>
            {text.length > 0 && (
                <div
                    className="absolute left-1/2 bottom-1/2]"
                    style={{ transform: "translate(-50%, -110%)" }}>
                    <div
                        id="toast-undo"
                        className="flex items-center max-w-4xl w-full p-4 text-gray-500 bg-gray-800 rounded-lg shadow bg-opacity-40"
                        role="alert">
                        <div className="text-sm font-normal text-white pr-5 max-w-3xl whitespace-normal break-words">{text}</div>
                        <div className="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
                            <button
                                onClick={() => setText("")}
                                type="button"
                                className="ms-auto -mx-1.5 -my-1.5 bg-white text-white hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700"
                                data-dismiss-target="#toast-undo"
                                aria-label="Close">
                                <span className="sr-only">Delete</span>
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
