import { useEffect, useRef, useState } from "react";
import videoHandler from "../../controller/video/videoHandler.ts";
import { Camera } from "@mediapipe/camera_utils";
import SettingsModal from "./SettingsModal.tsx";
import Subtitle from "./Subtitle.tsx";

export default function CameraScreen() {
    const [cameraState, setCameraState] = useState(false);
    const [camera, setCamera] = useState<Camera>();
    const [settingsState, setSettingsState] = useState(false);
    const [finishedLoading, setFinishedLoading] = useState(true);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const getCamera = async () => {
        const cam = await videoHandler(canvasRef, setFinishedLoading);
        setCamera(cam);
    };

    const toggleCamera = async () => {
        setCameraState((prev) => !prev);

        if (!cameraState) {
            setFinishedLoading(false);
            await camera?.start();
            // setFinishedLoading(true);
            return;
        }

        camera?.stop();
    };

    useEffect(() => {
        getCamera().then();

        return () => {
            camera?.stop();
        };
    }, []);

    return (
        <>
            <SettingsModal
                setSettingsState={setSettingsState}
                settingsState={settingsState}
            />
            <section className="flex flex-col w-full h-full justify-center items-center overflow-hidden pb-10">
                <div className="flex flex-row w-full  justify-center items-center">
                    <div className="mt-8 w-5/6 code-example">
                        <div className="w-full p-4 border border-gray-200 bg-[#ECF8F5] rounded-t-xl">
                            <div className="grid grid-cols-1">
                                <div className="relative col-span-2 sm:col-span-1">
                                    <canvas
                                        className="inset-0 z-0 w-full h-fit aspect-w-16 aspect-h-9 rounded-xl"
                                        ref={canvasRef}
                                        width={1920}
                                        height={1080}
                                    />
                                    <Subtitle />
                                    {!finishedLoading && (
                                        <div
                                            role="status"
                                            className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                            <svg
                                                aria-hidden="true"
                                                className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                                viewBox="0 0 100 101"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentFill"
                                                />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="code-preview-wrapper">
                            <div className="bottom-0 left-0 z-50 w-full h-16 border-t rounded-b-xl bg-[#ECF8F5]">
                                <div className="grid h-full max-w-lg grid-cols-2 mx-auto font-medium">
                                    <button
                                        onClick={() => toggleCamera()}
                                        type="button"
                                        className="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-200 transition-all ease-in-out duration-300">
                                        <svg
                                            className="w-6 h-6 text-black"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 14">
                                            <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                                            {!cameraState && (
                                                <line
                                                    x1="1"
                                                    y1="1"
                                                    x2="19"
                                                    y2="13"
                                                    stroke="red"
                                                    strokeWidth="2"
                                                />
                                            )}
                                        </svg>

                                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Camera</span>
                                    </button>
                                    <button
                                        onClick={() => setSettingsState(true)}
                                        type="button"
                                        className="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-200 transition-all ease-in-out duration-300">
                                        <svg
                                            className="w-5 h-5 mb-2 text-black"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20">
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                                            />
                                        </svg>
                                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Settings</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
