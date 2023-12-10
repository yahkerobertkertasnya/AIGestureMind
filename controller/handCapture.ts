import { HAND_CONNECTIONS, Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import getGesturePrediction from "./getGesturePrediction.ts";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";

export default function handCapture(ctx: CanvasRenderingContext2D, camera: HTMLVideoElement) {
    const mpHands = new Hands({
        locateFile: (file) => {
            return `/node_modules/@mediapipe/hands/${file}`;
        },
    });
    mpHands.setOptions({
        maxNumHands: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
        modelComplexity: 1,
    });

    mpHands.onResults((results) => {
        ctx.save();
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(results.image, 0, 0, ctx.canvas.width, ctx.canvas.height);

        if (results.multiHandLandmarks) {
            for (const landmarks of results.multiHandLandmarks) {
                drawConnectors(ctx, landmarks, HAND_CONNECTIONS, { color: "#00FF00", lineWidth: 3 });
                drawLandmarks(ctx, landmarks, {
                    color: "#FF0000",
                    fillColor: "#00FF00",
                });

                let minX = ctx.canvas.width,
                    minY = ctx.canvas.height,
                    maxX = 0,
                    maxY = 0;
                for (const point of landmarks) {
                    minX = Math.min(minX, point.x * ctx.canvas.width) - 3;
                    minY = Math.min(minY, point.y * ctx.canvas.height) - 3;
                    maxX = Math.max(maxX, point.x * ctx.canvas.width) + 3;
                    maxY = Math.max(maxY, point.y * ctx.canvas.height) + 3;
                }

                ctx.strokeStyle = "#FF0000";
                ctx.lineWidth = 2;
                ctx.strokeRect(minX, minY, maxX - minX, maxY - minY);
                saveCanvasImage(ctx, minX, minY, maxX - minX, maxY - minY);
            }
        }

        ctx.restore();
    });

    new Camera(camera, {
        onFrame: async () => {
            await mpHands.send({ image: camera });
        },
        width: 1280,
        height: 720,
    }).start();
}
