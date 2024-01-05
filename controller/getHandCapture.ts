import { Hands } from "@mediapipe/hands";

export default function getHandCapture() {
    const mpHands = new Hands({
        locateFile: (file) => {
            return `/node_modules/@mediapipe/hands/${file}`;
        },
    });

    mpHands.setOptions({
        maxNumHands: 2,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
        modelComplexity: 1,
    });

    return mpHands;
}
