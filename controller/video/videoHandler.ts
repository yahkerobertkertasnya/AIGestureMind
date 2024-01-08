import getHandCapture from "../getHandCapture";
import { Camera } from "@mediapipe/camera_utils";
import drawCanvas from "../canvas/canvasHandler.ts";
import { RefObject } from "react";

export default async function videoHandler(canvasRef: RefObject<HTMLCanvasElement>, setFinishedLoading: (finishedLoading: boolean) => void) {
    const canvas = canvasRef.current!;
    const video = document.createElement("video");
    const hands = getHandCapture();

    canvas.getContext("2d")!.fillRect(0, 0, canvas.width, canvas.height);

    const cameraOptions = {
        onFrame: async () => {
            await hands.send({ image: video });
        },
        width: 1920,
        height: 1080,
    };

    hands.onResults((result) => {
        setFinishedLoading(true);
        drawCanvas(result, canvas);
    });

    return new Camera(video, cameraOptions);
}
