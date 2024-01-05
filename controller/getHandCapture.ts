import { Hands } from "@mediapipe/hands";

export default function getHandCapture() {
    const mpHands = new Hands({
        locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        },
    });

    console.log(mpHands);

    mpHands.setOptions({
        maxNumHands: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
        modelComplexity: 1,
    });

    return mpHands;
}
