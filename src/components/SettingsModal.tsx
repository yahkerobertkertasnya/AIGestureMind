import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Color } from "../../interface/color.ts";
import { Thickness } from "../../interface/thickness.ts";
import { setCanvasColor, setCanvasThickness, setCanvasTimeout } from "../../controller/canvas/canvasHandler.ts";

interface SettingsModal {
    settingsState: boolean;
    setSettingsState: Dispatch<SetStateAction<boolean>>;
}

export default function SettingsModal({ settingsState, setSettingsState }: SettingsModal) {
    const [color, setColor] = useState<Color>({
        landmark: "#FF0000",
        connector: "#00FF00",
    });
    const [thickness, setThickness] = useState<Thickness>({
        landmark: 2,
        connector: 1,
    });
    const [timeoutDelay, setTimeoutDelay] = useState(1000);

    useEffect(() => {
        setCanvasColor(color);
        setCanvasThickness(thickness);
        setCanvasTimeout(timeoutDelay);
    }, [color, thickness, timeoutDelay]);

    return (
        <>
            {settingsState && (
                <>
                    <div
                        id="crud-modal"
                        tabIndex={-1}
                        aria-hidden="true"
                        className="flex bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-50 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)]">
                        <div className="relative p-4 w-full max-w-md max-h-full ">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Configure Camera</h3>
                                    <button
                                        onClick={() => setSettingsState(!settingsState)}
                                        type="button"
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-toggle="crud-modal">
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
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <form
                                    className="p-4 md:p-5"
                                    onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Landmark Settings
                                            </label>
                                            <div className="flex flex-row items-center">
                                                <input
                                                    type="color"
                                                    value={color.landmark}
                                                    onChange={(e) => setColor({ ...color, landmark: e.target.value })}
                                                    className="p-1 pr-4 h-10 w-14 block bg-transparent border-0 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                                                    id="hs-color-input"
                                                />
                                                <input
                                                    id="default-range"
                                                    type="range"
                                                    value={thickness.landmark}
                                                    onChange={(e) =>
                                                        setThickness({
                                                            ...thickness,
                                                            landmark: parseInt(e.target.value),
                                                        })
                                                    }
                                                    className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Connector Settings
                                            </label>
                                            <div className="flex flex-row items-center">
                                                <input
                                                    type="color"
                                                    className="p-1 pr-4 h-10 w-14 block bg-transparent border-0 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                                                    id="hs-color-input"
                                                    value={color.connector}
                                                    onChange={(e) => setColor({ ...color, connector: e.target.value })}
                                                    title="Choose your color"
                                                />
                                                <input
                                                    id="default-range"
                                                    type="range"
                                                    value={thickness.connector}
                                                    onChange={(e) =>
                                                        setThickness({
                                                            ...thickness,
                                                            connector: parseInt(e.target.value),
                                                        })
                                                    }
                                                    className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="max-w-sm mx-auto">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Detection Interval (ms);</label>
                                                <input
                                                    type="number"
                                                    id="number-input"
                                                    aria-describedby="helper-text-explanation"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="1"
                                                    required
                                                    value={timeoutDelay}
                                                    onChange={(e) => setTimeoutDelay(parseInt(e.target.value))}
                                                    onSubmit={(e) => e.preventDefault()}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
